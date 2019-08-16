'use strict';

// Application Dependencies
const express = require('express');
const superagent = require('superagent');
const pg = require('pg');
const cors = require('cors');

// Load environment variables from .env file
require('dotenv').config();

// Cache Timeouts
const timeouts = {
  weather: 15 * 1000,
  yelp: 24 * 1000 * 60 * 60,
  movies: 30 * 1000 * 60 * 60 * 24,
  eventbrite: 6 * 1000 * 60 * 60,
  trails: 7 * 1000 * 60 * 60 * 24
}

// Application Setup
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Database Setup
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

// API Routes
app.get('/location', getLocation);
app.get('/weather', getWeather);
app.get('/movies', getMovies);
app.get('/yelp', getYelp);
app.get('/events', getEvents);
app.get('/trails', getTrails);


// Make sure the server is listening for requests
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

// Error handler
function handleError(err, res) {
  console.error(err);
  if (res) res.status(500).send('Sorry, something went wrong');
}

// Look for the results in the database
function lookup(options) {
  const SQL = `SELECT * FROM ${options.tableName} WHERE location_id=$1;`;
  const values = [options.location];

  client.query(SQL, values)
    .then(result => {
      if (result.rowCount > 0) {
        options.cacheHit(result);
      } else {
        options.cacheMiss();
      }
    })
    .catch(error => handleError(error));
}

// Clear the results for a location if they are stale
function deleteByLocationId(table, city) {
  const SQL = `DELETE from ${table} WHERE location_id=${city};`;
  return client.query(SQL);
}

// Models
function Location(query, res) {
  this.tableName = 'locations';
  this.search_query = query;
  this.formatted_query = res.body.results[0].formatted_address;
  this.latitude = res.body.results[0].geometry.location.lat;
  this.longitude = res.body.results[0].geometry.location.lng;
  this.created_at = Date.now();
}

Location.lookupLocation = (location) => {
  const SQL = `SELECT * FROM locations WHERE search_query=$1;`;
  const values = [location.query];

  return client.query(SQL, values)
    .then(result => {
      if (result.rowCount > 0) {
        location.cacheHit(result);
      } else {
        location.cacheMiss();
      }
    })
    .catch(console.error);
}

Location.prototype = {
  save: function () {
    const SQL = `INSERT INTO locations (search_query, formatted_query, latitude, longitude) VALUES ($1, $2, $3, $4) ON CONFLICT DO NOTHING RETURNING id;`;
    const values = [this.search_query, this.formatted_query, this.latitude, this.longitude];

    return client.query(SQL, values)
      .then(result => {
        this.id = result.rows[0].id;
        return this;
      });
  }
};

function Weather(day) {
  this.tableName = 'weathers';
  this.forecast = day.summary;
  this.time = new Date(day.time * 1000).toString().slice(0, 15);
  this.created_at = Date.now();
}

Weather.tableName = 'weathers';
Weather.lookup = lookup;
Weather.deleteByLocationId = deleteByLocationId;

Weather.prototype = {
  save: function (location_id) {
    const SQL = `INSERT INTO ${this.tableName} (forecast, time, created_at, location_id) VALUES ($1, $2, $3, $4);`;
    const values = [this.forecast, this.time, this.created_at, location_id];

    client.query(SQL, values);
  }
}

function Yelp(business) {
  this.tableName = 'yelps';
  this.name = business.name;
  this.image_url = business.image_url;
  this.price = business.price;
  this.rating = business.rating;
  this.url = business.url;
  this.created_at = Date.now();
}

Yelp.tableName = 'yelps';
Yelp.lookup = lookup;
Yelp.deleteByLocationId = deleteByLocationId;

Yelp.prototype = {
  save: function (location_id) {
    const SQL = `INSERT INTO ${this.tableName} (name, image_url, price, rating, url, created_at, location_id) VALUES ($1, $2, $3, $4, $5, $6, $7);`;
    const values = [this.name, this.image_url, this.price, this.rating, this.url, this.created_at, location_id];

    client.query(SQL, values);
  }
}

function Movie(movie) {
  this.tableName = 'movies';
  this.title = movie.title;
  this.overview = movie.overview;
  this.average_votes = movie.vote_average;
  this.total_votes = movie.vote_count;
  this.image_url = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
  this.popularity = movie.popularity;
  this.released_on = movie.release_date;
  this.created_at = Date.now();
}

Movie.tableName = 'movies';
Movie.lookup = lookup;
Movie.deleteByLocationId = deleteByLocationId;

Movie.prototype = {
  save: function (location_id) {
    const SQL = `INSERT INTO ${this.tableName} (title, overview, average_votes, total_votes, image_url, popularity, released_on, created_at, location_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);`;
    const values = [this.title, this.overview, this.average_votes, this.total_votes, this.image_url, this.popularity, this.released_on, this.created_at, location_id];

    client.query(SQL, values);
  }
}

function Event(event) {
  this.tableName = 'events';
  this.link = event.url;
  this.name = event.name.text;
  this.event_date = new Date(event.start.local).toString().slice(0, 15);
  this.summary = event.summary;
  this.created_at = Date.now();
}

Event.tableName = 'events';
Event.lookup = lookup;
Event.deleteByLocationId = deleteByLocationId;

Event.prototype = {
  save: function (location_id) {
    const SQL = `INSERT INTO ${this.tableName} (link, name, event_date, summary, created_at, location_id) VALUES ($1, $2, $3, $4, $5, $6);`;
    const values = [this.link, this.name, this.event_date, this.summary, this.created_at, location_id];

    client.query(SQL, values);
  }
}

function Trail(trail) {
  this.tableName = 'trails';
  this.name = trail.name;
  this.location = trail.location;
  this.length = trail.length;
  this.stars = trail.stars;
  this.star_votes = trail.starVotes;
  this.summary = trail.summary;
  this.trail_url = trail.url;
  this.conditions = trail.conditionDetails;
  this.condition_date = trail.conditionDate.slice(0, 10);
  this.condition_time = trail.conditionDate.slice(12);
  this.created_at = Date.now();
}

Trail.tableName = 'trails';
Trail.lookup = lookup;
Trail.deleteByLocationId = deleteByLocationId;

Trail.prototype = {
  save: function (location_id) {
    const SQL = `INSERT INTO ${this.tableName} (name, location, length, stars, star_votes, summary, trail_url, conditions, condition_date, condition_time, created_at, location_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12);`;
    const values = [this.name, this.location, this.length, this.stars, this.star_votes, this.summary, this.trail_url, this.conditions, this.condition_date, this.condition_time, this.created_at, location_id];

    client.query(SQL, values)
  }
}

function getLocation(request, response) {
  Location.lookupLocation({
    tableName: Location.tableName,

    query: request.query.data,

    cacheHit: function (result) {
      response.send(result.rows[0]);
    },

    cacheMiss: function () {
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${this.query}&key=${process.env.GEOCODE_API_KEY}`;

      return superagent.get(url)
        .then(result => {
          const location = new Location(this.query, result);
          location.save()
            .then(location => response.send(location));
        })
        .catch(error => handleError(error));
    }
  })
}

function getWeather(request, response) {
  Weather.lookup({
    tableName: Weather.tableName,

    location: request.query.data.id,

    cacheHit: function (result) {
      let ageOfResults = (Date.now() - result.rows[0].created_at);
      if (ageOfResults > timeouts.weather) {
        Weather.deleteByLocationId(Weather.tableName, request.query.data.id);
        this.cacheMiss();
      } else {
        response.send(result.rows);
      }
    },

    cacheMiss: function () {
      const url = `https://api.darksky.net/forecast/${process.env.WEATHER_API_KEY}/${request.query.data.latitude},${request.query.data.longitude}`;

      return superagent.get(url)
        .then(result => {
          const weatherSummaries = result.body.daily.data.map(day => {
            const summary = new Weather(day);
            summary.save(request.query.data.id);
            return summary;
          });
          response.send(weatherSummaries);
        })
        .catch(error => handleError(error, response));
    }
  })
}

function getYelp(request, response) {
  Yelp.lookup({
    tableName: Yelp.tableName,

    location: request.query.data.id,

    cacheHit: function (result) {
      let ageOfResults = (Date.now() - result.rows[0].created_at);
      if (ageOfResults > timeouts.yelp) {
        Yelp.deleteByLocationId(Yelp.tableName, request.query.data.id);
        this.cacheMiss();
      } else {
        response.send(result.rows);
      }
    },

    cacheMiss: function () {
      const url = `https://api.yelp.com/v3/businesses/search?location=${request.query.data.search_query}`;

      superagent.get(url)
        .set('Authorization', `Bearer ${process.env.YELP_API_KEY}`)
        .then(result => {
          const yelpSummaries = result.body.businesses.map(business => {
            const review = new Yelp(business);
            review.save(request.query.data.id);
            return review;
          });

          response.send(yelpSummaries);
        })
        .catch(error => handleError(error, response));
    }
  })
}

function getMovies(request, response) {
  Movie.lookup({
    tableName: Movie.tableName,

    location: request.query.data.id,

    cacheHit: function (result) {
      let ageOfResults = (Date.now() - result.rows[0].created_at);
      if (ageOfResults > timeouts.movies) {
        Movie.deleteByLocationId(Movie.tableName, request.query.data.id);
        this.cacheMiss();
      } else {
        response.send(result.rows);
      }
    },

    cacheMiss: function () {
      const url = `https://api.themoviedb.org/3/search/movie/?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=1&query=${request.query.data.search_query}`;

      superagent.get(url)
        .then(result => {
          const movieSummaries = result.body.results.map(movie => {
            const details = new Movie(movie);
            details.save(request.query.data.id);
            return details;
          });

          response.send(movieSummaries);
        })
        .catch(error => handleError(error, response));
    }
  })
}

function getEvents(request, response) {
  Event.lookup({
    tableName: Event.tableName,

    location: request.query.data.id,

    cacheHit: function (result) {
      let ageOfResults = (Date.now() - result.rows[0].created_at);
      if (ageOfResults > timeouts.events) {
        Event.deleteByLocationId(Event.tableName, request.query.data.id);
        this.cacheMiss();
      } else {
        response.send(result.rows);
      }
    },

    cacheMiss: function () {
      const url = `https://www.eventbriteapi.com/v3/events/search?token=${process.env.EVENTBRITE_API_KEY}&location.address=${request.query.data.formatted_query}`

      superagent.get(url)
        .then(result => {
          const events = result.body.events.map(eventData => {
            const event = new Event(eventData);
            event.save(request.query.data.id);
            return event;
          });

          response.send(events);
        })
        .catch(error => handleError(error, response));
    }
  })
}

function getTrails(request, response) {
  Trail.lookup({
    tableName: Trail.tableName,

    location: request.query.data.id,

    cacheHit: function (result) {
      let ageOfResults = (Date.now() - result.rows[0].created_at);
      if (ageOfResults > timeouts.trails) {
        Trail.deleteByLocationId(Trail.tableName, request.query.data.id);
        this.cacheMiss();
      } else {
        response.send(result.rows);
      }
    },

    cacheMiss: function () {
      const url = `https://www.hikingproject.com/data/get-trails?lat=${request.query.data.latitude}&lon=${request.query.data.longitude}&maxDistance=200&key=${process.env.TRAIL_API_KEY}`;

      superagent.get(url)
        .then(result => {
          const trails = result.body.trails.map(trail => {
            const condition = new Trail(trail);
            condition.save(request.query.data.id);
            return condition;
          });

          response.send(trails);
        })
        .catch(error => handleError(error, response));
    }
  })
}
