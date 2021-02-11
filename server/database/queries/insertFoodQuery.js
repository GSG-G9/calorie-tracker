const connection = require('../config/connection');

const insertFoodQuery = (user_id, foodId, categoryId, grams) =>
  connection.query({
    text:
      'INSERT INTO UserFoodRelation(users_id, food_id, food_category_id, amount_in_grams) values ($1,$2,$3,$4)',
    values: [user_id, foodId, categoryId, grams],
  });

module.exports = insertFoodQuery;
