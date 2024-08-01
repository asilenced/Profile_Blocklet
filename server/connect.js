const { Level } = require('level');
const dbPath = './db/mydb';

const db = new Level(dbPath, {
  valueEncoding: 'json'
});

const userKey = 'user_1';
const initialUserData = {
  name: 'John Doe',
  jobTitle: 'Software Developer',
  email: 'XXXXX@gmail.com',
  phone: '13012344321',
  bio: 'Hello, Nice to meet you'
};

db.get(userKey, (err, value) => {
  if (err) {
    if (err.notFound) {
      db.put(userKey, JSON.stringify(initialUserData), (err) => {
        if (err) {
          console.error('Error creating users entry:', err.message);
        } else {
          console.log('Initial user data inserted.');
        }
      });
    } else {
      console.error('Error reading from database:', err.message);
    }
  } else {
    console.log('Users entry already exists:', value);
  }
});

module.exports = db;
