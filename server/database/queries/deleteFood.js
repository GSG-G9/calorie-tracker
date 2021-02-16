const connection = require('../config/connection');

const deleteFood = (categoryID, foodID, userID) => {
  const sql = {
    text:
      'DELETE FROM UserFoodRelation WHERE users_id=$1 AND food_category_id=$2 AND food_id=$3',
    values: [userID, categoryID, foodID],
  };
  return connection.query(sql);
};

module.exports = deleteFood;
