const express = require('express');
const router = express.Router();

// GET /auth/login
router.get('/login', (req, res) => {
  res.render('login');  
});

// GET /auth/register
router.get('/register', (req, res) => {
  res.render('register');
});

// POST /auth/login
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  res.send(`Logging in: ${email}`);
});

// POST /auth/register
router.post('/register', (req, res) => {
  const { email, password } = req.body;
  res.send(`Register user: ${email}`);
});

module.exports = router;
