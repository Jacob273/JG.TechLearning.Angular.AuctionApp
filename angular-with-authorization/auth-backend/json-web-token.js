const jwt = require('jsonwebtoken');
const secretSalt = '9t36512h872t16512777271y723t81t2e6';

module.exports = {
  makeNewToken(user) {
    return jwt.sign(user, secretSalt, { expiresIn: '5m' });
  },
  verifyToken(token) {
    return jwt.verify(token, secretSalt);
  }
}
