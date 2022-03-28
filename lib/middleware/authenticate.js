const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  /*
    TODO: Check for the session cookie and verify
    its contents using jsonwebtoken, then
    assign the payload to req.user
  */
  const token = jwt.sign(
    { id: '1', username: 'miklo' },
    'top_secret_jwt_scret'
  );
  console.log('token', token);
  const payload = jwt.verify(token, 'top_secret_jwt_secret');
  console.log('payload', payload);
};
