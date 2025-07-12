const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
  console.log('Received request for /test');
  res.json({ message: 'API is working' });
});

module.exports = router;