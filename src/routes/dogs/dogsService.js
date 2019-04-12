const { dogQueue, dogs } = require('../../data/animals.js');

const dogsService = {
  getDogForAdoption() {
    return dogQueue.dequeue();
  },

  putDogUpForAdoption(newDog) {
    dogQueue.enqueue(newDog);
  },

  displayDogs() {
    return dogs;
  }
};

module.exports = dogsService;
