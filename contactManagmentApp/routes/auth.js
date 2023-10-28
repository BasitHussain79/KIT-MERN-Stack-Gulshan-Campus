const express = require('express');

const router = express.Router();

// @route GET api/auth
// @describe get loggedin user data
// @access Private
router.get('/', (req, res) => {
  res.send('get logged in data');
});

// @route POST api/auth
// @describe user login
// @access Public
router.post('/', (req, res) => {
  res.send('login user');
});

module.exports = router;
