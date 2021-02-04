const connection = require("../config/connection");

const insertFood = (food_type_id, food_name) => {
  return connection.query({
    text: "INSERT INTO food(food_type_id, food_name) values ($1,$2)",
    values: [food_type_id, food_name],
  });
};

module.exports = insertFood;