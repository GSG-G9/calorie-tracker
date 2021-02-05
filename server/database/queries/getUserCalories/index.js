const connection = require('../../config/connection');

module.exports = (userId) =>
  connection.query({
    text: 'SELECT daily_calories_goal as userCalories FROM users WHERE id=$1',
    values: [userId],
  });
