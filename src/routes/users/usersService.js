const { users, usersQueue } = require('../../data/users');

const usersService = {

  displayUsers() {
    return users;
  }

};

module.exports = usersService;