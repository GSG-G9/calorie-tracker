const connection = require('../config/connection');

const editFoodGrams = (userFoodRelationId, quantityGrams) => {
  const sql = {
    text:
      'UPDATE UserFoodRelation SET amount_in_grams=$2 WHERE id=$1 RETURNING amount_in_grams',
    values: [userFoodRelationId, quantityGrams],
  };
  return connection.query(sql);
};

module.exports = editFoodGrams;
