const { usersQueue, requeueUsers } = require('../../data/users');

const usersService = {

  displayUsers() {
    let currentNode = usersQueue.first;
    let users = [];
    if (usersQueue.last === null) {
      requeueUsers(usersQueue);
    }
    while (currentNode.next !== null) {
      users.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return users;
  },

  dequeueUser() {
    if (usersQueue.last === null) {
      requeueUsers(usersQueue);
    }
    return usersQueue.dequeue();
  }


};

module.exports = usersService;