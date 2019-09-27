'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true }
});

module.exports = mongoose.model('task', taskSchema);
