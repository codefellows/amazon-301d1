'use strict';

const express = require('express');
const superagent = require('superagent');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

require('dotenv').config();

app.use(cors());

app.get('/location', (request, response) => {
  searchToLatLong(request.query.data)
  .then(location => response.send(location))
  .catch(error => handleError(error, response));
});

app.get('/weather', getWeather);

function Location(query, res) {
  this.latitude = res.body.results[0].geometry.location.lat;
  this.longitude = res.body.results[0].geometry.location.lng;
  this.formatted_query = res.body.results[0].formatted_address;
  this.search_query = query;
}

function Weather(day) {
  this.forecast = day.summary;
  this.time = new Date(day.time * 1000).toDateString();
}

function searchToLatLong(query) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${process.env.GEOCODE_API_KEY}`;

  return superagent.get(url)
    .then(res => {
      return new Location(query, res);
    })
    .catch(error => handleError(error));
}

function getWeather(request, response) {
  const url = `https://api.darksky.net/forecast/${process.env.WEATHER_API_KEY}/${request.query.data.latitude},${request.query.data.longitude}`;

  superagent.get(url)
  .then(result => {
    const weatherSummaries = result.body.daily.data.map(day => {
      return new Weather(day);
    });

    response.send(weatherSummaries);
  })
  .catch(error => handleError(error));
}

function handleError(err, res) {
  console.error(err);
  if (res) res.status(500).send('sorry, something broke');
}

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
