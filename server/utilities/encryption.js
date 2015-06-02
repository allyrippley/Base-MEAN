var crypto = require('crypto');

exports.createSalt = function() {
  return crypto.randomBytes(128).toString('base64');
}


