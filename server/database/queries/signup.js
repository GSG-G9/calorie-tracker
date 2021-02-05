const connection = require("../config/connection");

const signupUser = (...args) => {
  return connection.query({
    text:
      "INSERT INTO users(username, email, password, name, gender, minAge, maxAge, weight, height, goalWeight) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *;",
    values: args,
  });
};
module.exports = signupUser;
