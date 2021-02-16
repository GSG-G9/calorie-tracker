const connection = require('../config/connection');

const getFoodCategory = (id, categoryId) => {
  const sql = {
    text:
      'SELECT UserFoodRelation.id as unique_id , *  FROM food INNER JOIN UserFoodRelation on food.id=UserFoodRelation.food_id INNER JOIN nutrition on food.id=nutrition.food_id WHERE UserFoodRelation.users_id=$1 AND UserFoodRelation.food_category_id=$2 AND UserFoodRelation.created_at = current_date;',
    values: [id, categoryId],
  };
  return connection.query(sql);
};

module.exports = getFoodCategory;
