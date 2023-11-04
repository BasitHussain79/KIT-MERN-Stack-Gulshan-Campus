const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
    require: true,
  },
  relation: {
    type: String,
    default: 'Personal',
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('contact', contactSchema);
