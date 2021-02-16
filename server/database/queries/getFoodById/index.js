const connection = require('../../config/connection');

module.exports = (foodId) =>
  connection.query({
    text:
      'SELECT * FROM food INNER JOIN nutrition ON food.id=nutrition.food_id WHERE food.id=$1',
    values: [foodId],
  });
