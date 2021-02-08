const { verify } = require('jsonwebtoken');

const { SECRET_KEY } = process.env;

const Auth = async (req, res, next) => {
  if (req.cookies.token) {
    verify(req.cookies.token, SECRET_KEY, (err, payload) => {
      if (err) {
        res
          .status(401)
          .json({ statusCode: 401, message: 'You are not Authorized' });
      } else {
        req.user = payload;
        next();
      }
    });
  } else {
    res
      .status(401)
      .json({ statusCode: 401, message: 'You are not registered yet' });
  }
};

module.exports = Auth;
