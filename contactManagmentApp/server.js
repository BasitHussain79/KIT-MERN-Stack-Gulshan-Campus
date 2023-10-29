const express = require('express');
const connectDB = require('./db/db');
require('dotenv').config();

const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.get('/', (req, res) =>
  res.json({
    msg: 'Welcome to the contact management app',
  })
);

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Port is listening ', PORT);
});
