const connection = require("../config/connection");

const signupUser = (...args) => {
  return connection.query({
    text:
      "INSERT INTO users(lastName, email, password, firstName, gender, minAge, maxAge, weight, height, goalWeight, dailyCaloriesGoal) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *;",
    values: args,
  });
};

module.exports = signupUser;
