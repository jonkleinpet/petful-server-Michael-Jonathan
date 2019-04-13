const Queue = require('./queue');
const users = [
  { name: 'Thinkful'},
  { name: 'Jon' },
  { name: 'Jane' },
  { name: 'Sammy' },
  { name: 'Jim' },
  { name: 'Paul' },
  { name: 'Tammy' },
  { name: 'Ben' },
  { name: 'Alice' },
  { name: 'Frank' }

];

const usersQueue = new Queue();
function requeueUsers(queue) {
  for (let i = 0; i <= users.length; i++) {
    queue.enqueue(users[i]);
  }
}
for (let i = 0; i <= users.length; i++) {
  usersQueue.enqueue(users[i]);
}

module.exports = { usersQueue, users, requeueUsers };

