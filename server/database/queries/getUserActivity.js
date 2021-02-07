const connection = require('../config/connection');

const getUserActivity = (activityId) =>
  connection.query({
    text: 'select activity_value from activity WHERE id = $1;',
    values: [activityId],
  });

module.exports = getUserActivity;
