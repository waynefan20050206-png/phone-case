// maincodest/app.js

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// setting
app.use(express.static(path.join(__dirname)));

// main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

//other
app.get('/cart', (req, res) => {
  res.sendFile(path.join(__dirname, 'cart.html'));
});

app.get('/personalize', (req, res) => {
  res.sendFile(path.join(__dirname, 'personalize.html'));
});

app.get('/product-detail', (req, res) => {
  res.sendFile(path.join(__dirname, 'product-detail.html'));
});

app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, 'profile.html'));
});

// start
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
