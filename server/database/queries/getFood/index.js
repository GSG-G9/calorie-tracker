const connection = require('../../config/connection');

module.exports = () =>
  connection.query(
    'SELECT id,food_name,image, (SELECT name AS food_type FROM food_type WHERE id = food.food_type_id)FROM food ',
  );
