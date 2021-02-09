const connection = require('../config/connection');

const getFoodCategory = (id, categoryId) => {
  const sql = {
    text:
      'SELECT * FROM food WHERE id IN(SELECT food_id FROM UserFoodRelation WHERE users_id = $1 AND food_category_id = $2);',
    values: [id, categoryId],
  };
  return connection.query(sql);
};

module.exports = getFoodCategory;
