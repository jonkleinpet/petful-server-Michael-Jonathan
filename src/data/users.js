const Queue = require('./queue');
const users = [
  { name: 'Thinkful'},
  { name: 'Jon' },
  { name: 'Jane' },
  { name: 'Sammy' },
  { name: 'Jim' },
  { name: 'Paul' },
  { name: 'Tammy' }
];

const usersQueue = new Queue();

for (let i = 0; i < users.length; i++) {
  usersQueue.enqueue(users[i]);
}

module.exports = { usersQueue, users };
