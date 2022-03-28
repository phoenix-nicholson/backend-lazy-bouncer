const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  /*
    TODO: Check for the session cookie and verify
    its contents using jsonwebtoken, then
    assign the payload to req.user
  */
  try {
    const { session } = req.cookies;

    const payload = jwt.verify(session, process.env.JWT_SECRET);

    req.user = payload;
    console.log('payload', payload);
    next();
  } catch (error) {
    next(error);
  }
};
