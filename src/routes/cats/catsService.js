const { catQueue } = require('../../data/animals.js');
const catsService = {
  getCatForAdoption() {
    return catQueue.dequeue();
  },

  putCatUpForAdoption(newCat) {
    catQueue.enqueue(newCat);
  },

  displayCat() {
    return catQueue;
  }
};

module.exports = catsService;
