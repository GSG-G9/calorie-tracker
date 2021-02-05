const connection = require('../../config/connection');

module.exports = (userId) =>
  connection.query({
    text:
      'SELECT SUM(UserFoodRelation.amount_in_grams*nutrition.calories_per_gram) as userFoodCalories FROM UserFoodRelation INNER JOIN nutrition ON UserFoodRelation.food_id=nutrition.food_id WHERE UserFoodRelation.users_id=$1 and UserFoodRelation.created_at = current_date',
    values: [userId],
  });
