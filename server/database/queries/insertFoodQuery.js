const connection = require("../config/connection");

const insertFoodQuery = (user_id, foodId, categoryId ,grams) => {
  return connection.query({
    text: "INSERT INTO UserFoodRelation(users_id, food_id, food_category_id, amount_in_gram) values ($1,$2,$3,$4)",
    values: [user_id, foodId, categoryId , grams],
  });
};

module.exports = insertFoodQuery;
