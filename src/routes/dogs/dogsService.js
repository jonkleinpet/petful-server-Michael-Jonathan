const { dogQueue } = require('../../data/animals.js');

const dogsService = {
  getDogForAdoption() {
    return dogQueue.dequeue();
  },

  putDogUpForAdoption(newDog) {
    dogQueue.enqueue(newDog);
  },

  displayDog() {
    return dogQueue.first;
  }
};

module.exports = dogsService;
