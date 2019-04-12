const express = require('express');
const usersRoute = express.Router();
const usersService = require('./usersService');

usersRoute
  .route('/')
  .get((req, res, next) => {
    const users = usersService.displayUsers();
    res.status(200).send(users);
  })
  .post((req, res, next) => {
    usersService.enqueueUser();
    res.status(200).json({ name: 'realUser' });
  })
  .delete((req, res, next) => {
    const user = usersService.dequeueUser();
    res.status(200).send(user);
  });
  
module.exports = usersRoute;
