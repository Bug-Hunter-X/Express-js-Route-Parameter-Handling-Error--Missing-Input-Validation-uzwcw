const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Input validation: Check if userId is a valid integer
  if (!/^[0-9]+$/.test(userId)) {
    return res.status(400).send('Invalid user ID');
  }
  // ... some database query to fetch user details based on userId ...
  .then(user => {
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.send(user);
  })
  .catch(error => {
    console.error('Database error:', error);
    res.status(500).send('Server error');
  });
});