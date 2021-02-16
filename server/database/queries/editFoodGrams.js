const connection = require('../config/connection');

const editFoodGrams = (userID, categoryID, foodID, quantityGrams) => {
  const sql = {
    text:
      'UPDATE UserFoodRelation SET amount_in_grams=$1 WHERE users_id=$2 AND food_id=$3 AND food_category_id=$4 and created_at =current_date RETURNING amount_in_grams',
    values: [quantityGrams, userID, foodID, categoryID],
  };
  return connection.query(sql);
};

module.exports = editFoodGrams;
