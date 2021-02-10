const connection = require('../config/connection');

const getFoodCalorie = (foodID) => {
  const sql = {
    text: 'SELECT calories, food_id FROM nutrition WHERE food_id IN ($1)',
    values: foodID,
  };

  return connection.query(sql);
};

module.exports = getFoodCalorie;
