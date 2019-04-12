const { users, usersQueue } = require('../../data/users');

const usersService = {

  displayUsers() {
    return users;
  },

  dequeueUser() {
    return usersQueue.dequeue();
  }


};

module.exports = usersService;