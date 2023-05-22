const express = require('express');
const router = express.Router();

// GET /products
router.get('/', (req, res) => {
  res.send('GET request for /products');
});

// POST /products
router.post('/', (req, res) => {
  res.send('POST request for /products');
});

module.exports = router;
