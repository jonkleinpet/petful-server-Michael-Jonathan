const { users, usersQueue } = require('../../data/users');

const usersService = {

  displayUsers() {
    return users;
  },

  dequeueUser() {
    return usersQueue.dequeue();
  },

  enqueueUser() {
    const user = {
      name: 'You'
    };
    usersQueue.enqueue(user);
  }

};

module.exports = usersService;