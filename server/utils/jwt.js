const { sign, verify } = require('jsonwebtoken');
require('dotenv').config({ path: './config.env' });

const signToken = (userID) =>
  new Promise((resolve, reject) => {
    sign(userID, process.env.SECRET_KEY, (err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });

const { SECRET_KEY } = process.env;

const verifyToken = (token) =>
  new Promise((resolve, reject) => {
    verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });

module.exports = { signToken, verifyToken };
