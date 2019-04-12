const { catQueue, cats } = require('../../data/animals.js');

const catsService = {
  getCatForAdoption() {
    return catQueue.dequeue();
  },

  putCatUpForAdoption(newCat) {
    catQueue.enqueue(newCat);
  },

  displayCats() {
    return cats;
  }
};

module.exports = catsService;
