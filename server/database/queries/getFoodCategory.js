const connection = require('../config/connection');

const getFoodCategory = (id, categoryId) => {
  connection.query({
    text:
      'SELECT * FROM UserFoodRelation WHERE food_category_id = $1 AND users_id = $2;',
    value: [categoryId, id],
  });
};

module.exports = getFoodCategory;
