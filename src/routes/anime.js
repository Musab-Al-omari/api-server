'use strict';

const express = require('express');
const router = express.Router();
const animeModle = require('../models/anime.js');
const Anime = require('../models/data-collection-class.js');

const animeInstance = new Anime(animeModle);

router.get('/anime', getAllAnime);
router.get('/anime/:id', getOneAnime);
router.post('/anime', createAnimeCard);
router.put('/anime/:id', updateAnimeCard);
router.delete('/anime/:id', deleteAnime);

async function getAllAnime(request, response) {
  let anime = animeInstance.get();
  response.status(200).json(anime);
}

async function getOneAnime(request, response) {
  //   console.log('beforeParse', request.params.id);
  let id = parseInt(request.params.id); //in anime.js line 14 we put 3 equal so there is a string an a integer
  //   console.log('afterParse', id);
  let oneAnime = await animeInstance.get(id);
  response.status(200).json(oneAnime);
}

async function createAnimeCard(request, response) {
  //   console.log(request);
  //   console.log('request.body', request.body);
  //   response.status(201).send('hello');
  let record = request.body;
  let createCard = await animeInstance.create(record);
  response.status(201).json(createCard);

}

async function updateAnimeCard(request, response) {
  let id = parseInt(request.params.id);
  //   console.log('id', id);
  let obj = request.body;
  //   console.log(obj);
  let updateObject = await animeInstance.update(id, obj);
  response.status(200).json(updateObject);
}

async function deleteAnime(request, response) {
  let id = parseInt(request.params.id);
  await animeInstance.delete(id);
  response.status(200).send('item deleted');
}





module.exports = router;