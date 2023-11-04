const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({
      msg: 'Autorization denied, token missing',
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWTSECRET);

    req.user = decoded.user;

    next();
  } catch (err) {
    console.error(err.message);
    res.status(401).json({ msg: 'Invalid token' });
  }
};
