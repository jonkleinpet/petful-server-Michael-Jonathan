const express = require('express');
const catsRoute = express.Router();
const catsService = require('./catsService');

catsRoute
  .route('/')
  .get((req, res, next) => {
    const cat = catsService.displayCat();
    res.status(200).send(cat);
  })
  .delete((req, res, next) => {
    const adoptedCat = catsService.getCatForAdoption();
    res.status(204).send(adoptedCat);
  });

module.exports = catsRoute;
