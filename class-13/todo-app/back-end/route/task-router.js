'use strict';

const Router = require('express').Router;
const jsonParser = require('body-parser').json();
const Task = require('../model/task.js');

const tasks = module.exports = new Router();

tasks.post('/task', jsonParser, (req, res) => {
  new Task(req.body).save()
    .then( list => res.json(list))
});
  
tasks.get('/tasks', (req, res) => {
  Task.find()
    .then(tasks => res.json(tasks))
});
  
tasks.get('/task/:id', (req, res) => {
  Task.findById(req.params.id)
    .then(task => res.json(task))
});