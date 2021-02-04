const connection = require("../config/connection");

const insertFoodQuery = (users_id, food_id, food_category_id) => {
  return connection.query({
    text: "INSERT INTO UserFoodRelation(users_id, food_id, food_category_id) values ($1,$2,$3)",
    values: [users_id, food_id, food_category_id],
  });
};

module.exports = insertFoodQuery;
