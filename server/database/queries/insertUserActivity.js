const connection = require("../config/connection");

const insertUserActivity = (activitylevel) => {
  return connection.query({
    text: "INSERT INTO activity(activity_name) VALUES($1) RETURNING *;",
    values: [activitylevel],
  });
};

module.exports = insertUserActivity;
