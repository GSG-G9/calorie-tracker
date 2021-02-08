const Boom = require('@hapi/boom');
const { verifyToken } = require('../../utils');

const Auth = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw Boom.unauthorized('You are not registered yet');
  try {
    req.user = await verifyToken(token);
    next();
  } catch (err) {
    throw Boom.unauthorized('You are not Authorized');
  }
};

module.exports = Auth;
