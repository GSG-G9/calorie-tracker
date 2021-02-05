const { sign } = require("jsonwebtoken");
require('dotenv').config({ path: './config.env' });

const signToken = (userID) => {
  return new Promise((resolve, reject) => {
    sign(userID, process.env.SECRET_KEY, (err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });
};

module.exports = signToken;
