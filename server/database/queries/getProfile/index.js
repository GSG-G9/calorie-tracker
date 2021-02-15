const connection = require('../../config/connection');

const getProfile = (id) =>
  connection.query({
    text:
      'select firstname, lastname, email, weight, height, gender, age  from users WHERE id = $1;',
    values: [id],
  });

module.exports = getProfile;
