'use strict';

require('@code-fellows/supergoose');
const ModelCollection = require('../src/models/data-collection-class');
const animeModel = require('../src/models/anime');

const mangaModel = require('../src/models/manga');
const classAnime = new ModelCollection(animeModel);
const classManga = new ModelCollection(mangaModel);

describe('anime Model', () => {
  it('Create a record using POST', async() => {
    let obj = { anime: 'naruto', character: 'naruto', type: 'Action' };
    let newAnime = await classAnime.create(obj);
    Object.keys(obj).forEach(key => {
      expect(newAnime[key]).toEqual(obj[key]);
    });
  });
  it('Read a list of records using GET', async() => {
    let newAnime = await classAnime.get();

    expect(newAnime[0].type).toEqual('Action');
    expect(newAnime[0].anime).toEqual('naruto');
    expect(newAnime[0].character).toEqual('naruto');

  });
  it('Read a record using GET', async() => {
    let newAnime = await classAnime.get();
    let _id = newAnime[0]._id;
    let animeById = await classAnime.get(_id);
    expect(animeById.type).toEqual('Action');
  });

  it('Update a record using PUT', async() => {
    let newAnime = await classAnime.get();
    let _id = newAnime[0]._id;
    let obj = { anime: 'fairyTail', character: 'natsu', type: 'magic' };
    let animeUpdate = await classAnime.update(_id, obj);
    expect(animeUpdate.type).toEqual('magic');
    expect(animeUpdate.anime).toEqual('fairyTail');
    expect(animeUpdate.character).toEqual('natsu');
  });

  it('Destroy a record using DELETE', async() => {
    let newAnime = await classAnime.get();
    let _id = newAnime[0]._id;


    let animeDeleted = await classAnime.delete(_id);
    console.log(animeDeleted);
    let animeget = await classAnime.get(_id);
    console.log(animeget);

    expect(animeDeleted.anime).toEqual('fairyTail');
    expect(animeget).toEqual(null);
  });

});







// ----------------------------------------------------------------------------
describe('manga Model', () => {
  it('Create a record using POST', async() => {

    let obj = { manga: 'naruto', character: 'naruto', type: 'Action' };
    let newmanga = await classManga.create(obj);
    Object.keys(obj).forEach(key => {
      expect(newmanga[key]).toEqual(obj[key]);
    });
  });
  it('Read a list of records using GET', async() => {
    let newmanga = await classManga.get();

    expect(newmanga[0].type).toEqual('Action');
    expect(newmanga[0].manga).toEqual('naruto');
    expect(newmanga[0].character).toEqual('naruto');

  });
  it('Read a record using GET', async() => {
    let newmanga = await classManga.get();
    let _id = newmanga[0]._id;
    let mangaById = await classManga.get(_id);
    expect(mangaById.type).toEqual('Action');
  });

  it('Update a record using PUT', async() => {
    let newmanga = await classManga.get();
    let _id = newmanga[0]._id;
    let obj = { manga: 'fairyTail', character: 'natsu', type: 'magic' };
    let mangaUpdate = await classManga.update(_id, obj);
    expect(mangaUpdate.type).toEqual('magic');
    expect(mangaUpdate.manga).toEqual('fairyTail');
    expect(mangaUpdate.character).toEqual('natsu');
  });

  it('Destroy a record using DELETE', async() => {
    let newmanga = await classManga.get();
    let _id = newmanga[0]._id;


    let mangaDeleted = await classManga.delete(_id);
    console.log(mangaDeleted);
    let mangaget = await classManga.get(_id);
    console.log(mangaget);

    expect(mangaDeleted.manga).toEqual('fairyTail');
    expect(mangaget).toEqual(null);
  });

});