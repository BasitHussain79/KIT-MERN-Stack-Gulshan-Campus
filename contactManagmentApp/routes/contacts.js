const express = require('express');
const auth = require('../middlewares/auth');

const router = express.Router();

const User = require('../models/User');
const Contact = require('../models/Contact');
const { check, validationResult } = require('express-validator');

// @route GET api/contacts
// @describe get all contacts
// @access PRIVATE
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({
      created_at: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.error(error.message);
    res.status(500).json({ msg: 'Server error' });
  }
});

// @route POST api/contacts
// @describe add a new contact
// @access PRIVATE
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Please enter name').exists(),
      check('phone', 'Please enter phone number').exists(),
    ],
  ],
  async (req, res) => {
    const result = validationResult(req);

    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }

    const { name, email, phone, relation } = req.body;

    try {
      let contact = await new Contact({
        name,
        email,
        phone,
        relation,
        user: req.user.id,
      });

      contact.save();

      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: 'Server error' });
    }
  }
);

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
