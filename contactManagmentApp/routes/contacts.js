const express = require('express');

const router = express.Router();

// @route GET api/contacts
// @describe get all contacts
// @access PRIVATE
router.get('/', (req, res) => {
  res.send('get all contacts');
});

// @route POST api/contacts
// @describe add a new contact
// @access PRIVATE
router.post('/', (req, res) => {
  res.send('add a new contact');
});

// @route PUT api/contacts/:id
// @describe update contact by id
// @access PRIVATE
router.put('/:id', (req, res) => {
  res.send('update contact');
});

// @route DELETE api/contacts/:id
// @describe delete contact by id
// @access PRIVATE
router.delete('/:id', (req, res) => {
  res.send('delete contact');
});

module.exports = router;
