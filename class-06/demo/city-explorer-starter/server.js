const express = require('express');
const app = express();

// will be used in the future for
// controlling who can access our API
const cors = require('cors');

// doesnt help yet but will hold project
// specific env vars in the future
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// currently anyone can access our API
app.use(cors());

app.get('/location', (request, response) => {
    // get location data from geo.json file
    const locationData = searchToLatLong(request.query.data);
    response.send(locationData);
});

function searchToLatLong(query) {
    const geoData = require('./data/geo.json');
    const location = new Location(geoData.results[0]);
    location.search_query = query;
    return location;
}

function Location(data) {
    this.formatted_query = data.formatted_address;
    this.latitude = data.geometry.location.lat;
    this.longitude = data.geometry.location.lng;   
}

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});