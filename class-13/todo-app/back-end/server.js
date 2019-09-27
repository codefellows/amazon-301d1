'use strict';

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const taskRouter = require('./route/task-router.js');
const PORT = process.env.PORT || 3000;

dotenv.config();

mongoose.connect(`${process.env.DATABASE_URL}/task-app-staging`, { useNewUrlParser: true });

app.use(cors());
app.use(taskRouter);

app.listen(PORT, ()=> {
  console.log(`listening on: ${PORT}`);
});
