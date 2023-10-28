const express = require('express');

const router = express.Router();

// @route POST api/users
// @describe Register a new User
// @access public
router.post('/', (req, res) => {
  res.send('Register a new user');
});

module.exports = router;
