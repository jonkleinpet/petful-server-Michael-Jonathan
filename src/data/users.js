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

// reset users for production server
setInterval(_resetUsers, 60000);

const usersQueue = new Queue();
function requeueUsers(queue) {
  for (let i = 0; i <= users.length; i++) {
    queue.enqueue(users[i]);
  }
}

function _resetUsers() {
  let currentNode = usersQueue.first;
  while (currentNode !== null) {
    usersQueue.dequeue();
    currentNode = currentNode.next;
  }
  for (let i = 0; i <= users.length; i++) {
    usersQueue.enqueue(users[i]);
  }
}

for (let i = 0; i <= users.length; i++) {
  usersQueue.enqueue(users[i]);
}

module.exports = { usersQueue, users, requeueUsers };

