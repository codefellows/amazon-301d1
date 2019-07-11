'use strict';

let __API_URL__;
let GEOCODE_API_KEY;

function setEventListeners() {
  $('#url-form').on('submit', function (event) {
    event.preventDefault();
    __API_URL__ = $('#back-end-url').val();
    $('#url-form').addClass('hide');
    manageForms();
  });

  $('#geocode-form').on('submit', function (event) {
    event.preventDefault();
    GEOCODE_API_KEY = $('#api-key').val();
    storeKey(GEOCODE_API_KEY);
    $('#geocode-form').addClass('hide');
    manageForms();
  });

  $('#search-form').on('submit', fetchCityData);
}

function getKey() {
  if (localStorage.getItem('geocode')) return JSON.parse(localStorage.getItem('geocode'));
}

function storeKey(key) {
  localStorage.setItem('geocode', JSON.stringify(key));
}

function manageForms() {
  let urlState = $('#url-form').hasClass('hide');
  let keyState = $('#geocode-form').hasClass('hide');

  if (urlState && keyState) { $('#search-form').removeClass('hide'); }
}

function fetchCityData(event) {
  event.preventDefault();
  let searchQuery = $('#input-search').val().toLowerCase();

  $.ajax({
    url: `${__API_URL__}/location`,
    method: 'GET',
    data: { data: searchQuery }
  })
    .then(location => {
      displayMap(location);
      getResource('weather', location);
      getResource('movies', location);
      getResource('yelp', location);
      getResource('trails', location);
      getResource('events', location);
    })
    .catch(error => {
      compileTemplate([error], 'error-container', 'error-template');
      $('#map').addClass('hide');
      $('section, div').addClass('hide');
    });
}

function displayMap(location) {
  $('.query-placeholder').text(`Here are the results for ${location.formatted_query}`);

  $('#map').removeClass('hide');
  $('section, div').removeClass('hide');

  $('#map').attr('src', `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude}%2c%20${location.longitude}&zoom=13&size=600x300&maptype=roadmap
  &key=${GEOCODE_API_KEY}`);
}

function getResource(resource, location) {
  $.get(`${__API_URL__}/${resource}`, { data: location })
    .then(result => {
      renderTimeTemplate(result[0], `${resource}-results`);
      compileTemplate(result, `${resource}-results`, `${resource}-results-template`);
    })
    .catch(error => {
      compileTemplate([error], 'error-container', 'error-template');
    });
}

function compileTemplate(input, sectionClass, templateId) {
  $(`.${sectionClass}`).empty();

  let template = Handlebars.compile($(`#${templateId}`).text());

  input.forEach(element => {
    $(`.${sectionClass}`).append(template(element));
  });
}

function renderTimeTemplate(input, sectionClass) {
  $(`.${sectionClass}`).parent().find('p').remove();

  let time = {
    'date-age': calculateAge(input.created_at)
  };

  let template = Handlebars.compile($('#time-template').text());

  $(`.${sectionClass}`).before(template(time));
}

function calculateAge(created_at) {
  if (!created_at) return 'TBD';
  let age = Date.now() - created_at;
  if (age > 86400000) {
    return `Updated : ${Math.floor(age / (86400000))} days ago`;
  }
  if (age > 3600000) {
    return `Updated : ${Math.floor(age / (3600000))} hours ago`;
  }
  if (age > 60000) {
    return `Updated : ${Math.floor(age / (60000))} minutes ago`;
  }
  if (age > 1000) {
    return `Updated : ${Math.floor(age / (1000))} seconds ago`;
  }
  return 'Just updated';
}

$(() => {
  setEventListeners();
  GEOCODE_API_KEY = getKey();
  if (GEOCODE_API_KEY) { $('#geocode-form').addClass('hide'); }
});
