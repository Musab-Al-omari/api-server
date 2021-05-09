'use strict';

const express = require('express');
const router = express.Router();
// eslint-disable-next-line no-unused-vars
const Manga = require('../models/data-collection-class.js');
const mangaModle = require('../models/manga.js');
const mangaInstance = new Manga(mangaModle);

router.get('/manga', getAllManga);
router.get('/manga/:id', getOneManga);
router.post('/manga', createMangaCard);
router.put('/manga/:id', updateMangaCard);
router.delete('/manga/:id', deleteManga);

async function getAllManga(request, response) {
  let anime = await mangaInstance.get();
  response.status(200).json(anime);
}

async function getOneManga(request, response) {

  let id = parseInt(request.params.id); //in anime.js line 14 we put 3 equal so there is a string an a integer

  let oneAnime = await mangaInstance.get(id);
  response.status(200).json(oneAnime);
}

async function createMangaCard(request, response) {

  let record = request.body;
  let createCard = await mangaInstance.create(record);
  response.status(201).json(createCard);

}

async function updateMangaCard(request, response) {
  let id = parseInt(request.params.id);

  let obj = request.body;

  let updateObject = await mangaInstance.update(id, obj);
  response.status(200).json(updateObject);
}

async function deleteManga(request, response) {
  let id = parseInt(request.params.id);
  await mangaInstance.delete(id);
  response.status(200).send('item deleted');
}



module.exports = router;