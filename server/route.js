const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./connect'); // Path to your connect.js file

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Ok' });
});

app.get('/api/users', async (req, res) => {
  try {
    const user = await db.get('user_1'); // Assuming 'user_1' is the key
    
    res.status(200).json({
      message: 'success',
      data: JSON.parse(user),
    });
  } catch (err) {
    if (err.notFound) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(500).json({ error: err.message });
    }
  }
});

app.put('/api/update/users/:id', async (req, res) => {
  const userId = `user_${req.params.id}`;
  const data = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    jobTitle: req.body.jobTitle,
    bio: req.body.bio
  };

  try {
    const muser = data;
    if (typeof muser.name !== 'string' || muser.name.trim().length === 0) {
      throw new Error('Name must be a non-empty string');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (typeof muser.email !== 'string' || !emailRegex.test(muser.email)) {
      throw new Error('Email must be a valid email address');
    }

    const phoneRegex = /^[+\d\s]+$/;

    if (typeof muser.phone !== 'string' || !phoneRegex.test(muser.phone)) {
      throw new Error('Phone must be a string containing only digits (0-9)');
    }
    await db.put(userId, JSON.stringify(data));
    const updatedUser = await db.get(userId);
    res.status(200).json({
      message: 'success',
      data: JSON.parse(updatedUser),
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const HTTP_PORT = process.env.PORT || 3030;

app.listen(HTTP_PORT, () => {
  console.log(`Job Dispatch API running on port ${HTTP_PORT}!`);
});
