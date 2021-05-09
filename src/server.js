/* eslint-disable indent */
'use strict';

const express = require('express');
const app = express();
const animeManga = require('./routes/manga.js');
const animeRouter = require('./routes/anime.js');
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;
const logger = require('./middleware/logger.js');
const errorHandler = require('./error-handlers/500.js');
const notFoundHandler = require('./error-handlers/404.js');
// const validator = require('./middleware/validator.js');


// database
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log('conntected to mongoDB'))
  .catch((err) => console.log(err));
// app.use(express.urlencoded({ extended: true }));
app.use(animeManga);
app.use(animeRouter);
app.use(express.json());
app.use(logger);
app.use('*', notFoundHandler);
app.use(errorHandler);








let start = (PORT) => {
  app.listen(PORT, () => {
    console.log(`I AM ON THIS ${PORT}`);
  });
};
module.exports = {
  app: app,
  start: start,
};