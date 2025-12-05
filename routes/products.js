const express = require('express');
const router = express.Router();

// GET /products - list products
router.get('/', (req, res) => {
  res.render('products', {
    products: [
      { id: 1, name: 'Custom Case A', price: 12.99 },
      { id: 2, name: 'Custom Case B', price: 15.99 }
    ]
  });
});

// GET /products/:id
router.get('/:id', (req, res) => {
  res.send(`Product details for ID: ${req.params.id}`);
});

module.exports = router;
