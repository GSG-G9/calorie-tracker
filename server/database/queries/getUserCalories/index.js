const connection = require('../../config/connection');

module.exports = (userId) =>
  connection.query({
    text: 'SELECT dailyCaloriesGoal as userCalories FROM users WHERE id=$1',
    values: [userId],
  });
