const express = require('express');
const router = express.Router();
// const request = require('request');

router.get('/check', function(req, res) {
  res.send('Hello World');
});

module.exports = router;
