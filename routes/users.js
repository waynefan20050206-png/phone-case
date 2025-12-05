const express = require('express');
const router = express.Router();

// GET /users/profile
router.get('/profile', (req, res) => {
  res.render('profile', {
    username: 'John Doe',
    email: 'john@example.com'
  });
});

// GET /users/:id
router.get('/:id', (req, res) => {
  res.send(`User page for user id ${req.params.id}`);
});

module.exports = router;
