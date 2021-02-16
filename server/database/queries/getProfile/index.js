const connection = require('../../config/connection');

const getProfile = (id) =>
  connection.query({
    text:
      'select image, firstname, lastname, email, weight, height, gender, age  from users WHERE id = $1;',
    values: [id],
  });

module.exports = getProfile;
