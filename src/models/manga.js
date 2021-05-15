'use strict';

// Schema from mongoose package;
const mongoose = require('mongoose');
const mangaSchema = mongoose.Schema({
  manga: { type: String, required: true },
  character: { type: String, required: true },
  type: { type: String, enum: ['Action', 'Super_Power', 'Drama'] },
});
// a schema is the structure of my object in this collection
// a model is a wrapper for the schema
const mangaModel = mongoose.model('manga', mangaSchema);
module.exports = mangaModel;