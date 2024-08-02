const { Level } = require('level');
const dbPath = './db/mydb';

const db = new Level(dbPath, {
  valueEncoding: 'json'
});

const userKey = 'user_1';
const initialUserData = {
  name: 'Michael Tan',
  jobTitle: 'Senior Full Stack developer',
  email: 'enjoyablecoder1758981@gmail.com',
  phone: '+86 182 2222 4936',
  bio: 'Passionate software engineer with 5+ years of experience in full-stack development.',
  profilePicture: '',
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
