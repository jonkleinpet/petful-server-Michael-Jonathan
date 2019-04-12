const express = require('express');
const dogsRoute = express.Router();
const dogsService = require('./dogsService');

dogsRoute
  .route('/')
  .get((req, res, next) => {
    const dog = dogsService.displayDog();
    res.status(200).send(dog);
  })
  .delete((req, res, next) => {
    const adoptedDog = dogsService.getDogForAdoption();
    res.status(204).send(adoptedDog);
  });

module.exports = dogsRoute;
