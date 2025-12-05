const express = require('express');
const router = express.Router();

// GET /cart
router.get('/', (req, res) => {
  res.render('cart', {
    items: [
      { name: 'Custom Case A', qty: 1, price: 12.99 },
      { name: 'Custom Case B', qty: 2, price: 15.99 }
    ]
  });
});

// POST /cart/add
router.post('/add', (req, res) => {
  const { productId } = req.body;
  res.send(`Added product ${productId} to cart`);
});

// POST /cart/remove
router.post('/remove', (req, res) => {
  const { productId } = req.body;
  res.send(`Removed product ${productId} from cart`);
});

module.exports = router;
