const express = require('express');
const catsRoute = express.Router();
const catsService = require('./catsService');

catsRoute
  .route('/')
  .get((req, res, next) => {
    const cats = catsService.displayCats();
    res.status(200).send(cats);
  })
  .delete((req, res, next) => {
    const adoptedCat = catsService.getCatForAdoption();
    res.status(204).send(adoptedCat);
  });

module.exports = catsRoute;
