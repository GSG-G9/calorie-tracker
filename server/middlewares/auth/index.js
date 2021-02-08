const Boom = require('@hapi/boom');
const { verifyToken } = require('../../utils');

const Auth = async (req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    try {
      req.user = await verifyToken(token);
      next();
    } catch (err) {
      throw Boom.unauthorized('You are not Authorized');
    }
  } else {
    res
      .status(401)
      .json({ statusCode: 401, message: 'You are not registered yet' });
  }
};

module.exports = Auth;
