'use strict';

// Schema from mongoose package;
const mongoose = require('mongoose');
const animeSchema = mongoose.Schema({
  anime: { type: String, required: true },
  character: { type: Number, required: true },
  type: { type: String, enum: ['Action', 'Super_Power', 'Drama'] },
});
// a schema is the structure of my object in this collection
// a model is a wrapper for the schema
const animeModel = mongoose.model('anime', animeSchema);
module.exports = animeModel;