const { dogQueue, requeueDogs } = require('../../data/animals.js');

const dogsService = {
  getDogForAdoption() {
    if (dogQueue.last === null) {
      requeueDogs(dogQueue);
    }
    return dogQueue.dequeue();
  },

  putDogUpForAdoption(newDog) {
    dogQueue.enqueue(newDog);
  },

  displayDogs() {
    if (dogQueue.last === null) {
      requeueDogs(dogQueue);
    }
    let currentNode = dogQueue.first;
    let dogs = [];
    while (currentNode.next !== null) {
      dogs.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return dogs;
  }
};

module.exports = dogsService;
