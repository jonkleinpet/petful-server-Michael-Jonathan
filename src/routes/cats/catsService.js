const { catQueue, requeueCats } = require('../../data/animals.js');

const catsService = {
  getCatForAdoption() {
    if (catQueue.last === null) {
      requeueCats(catQueue);
    }
    return catQueue.dequeue();
  },

  putCatUpForAdoption(newCat) {
    catQueue.enqueue(newCat);
  },

  displayCats() {
    if (catQueue.last === null) {
      requeueCats(catQueue);
    }
    let currentNode = catQueue.first;
    let cats = [];
    while (currentNode.next !== null) {
      cats.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return cats;
  }
};

module.exports = catsService;