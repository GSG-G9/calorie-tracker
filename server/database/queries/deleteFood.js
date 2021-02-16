const connection = require('../config/connection');

const deleteFood = (userFoodRelationId) => {
  const sql = {
    text: 'DELETE FROM UserFoodRelation WHERE id=$1',
    values: [userFoodRelationId],
  };
  return connection.query(sql);
};

module.exports = deleteFood;
