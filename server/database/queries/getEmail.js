const connection = require('../config/connection');

const getUserByEmail = (email) => {
  return connection.query({
    text: 'SELECT username FROM users WHERE email = $1;',
    values: [email],
  });
};
module.exports = getUserByEmail;