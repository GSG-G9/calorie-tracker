const connection = require("../config/connection");

const getUserActivity = (activity_id) => {
  return connection.query({
    text: "select activity_value from activity WHERE id = $1;",
    values: [activity_id],
  });
};

module.exports = getUserActivity;


