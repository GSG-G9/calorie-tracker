const connection = require('../config/connection');

const signupUser = ({
  lastName,
  email,
  password,
  firstName,
  gender,
  age,
  weight,
  height,
  goalWeight,
  dailyCaloriesGoal,
  activityId,
}) => {
  const args = [
    lastName,
    email,
    password,
    firstName,
    gender,
    age,
    weight,
    height,
    goalWeight,
    dailyCaloriesGoal,
    activityId,
  ];
  return connection.query({
    text:
      'INSERT INTO users(lastName, email, password, firstName, gender, age, weight, height, goalWeight, dailyCaloriesGoal, activity_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *;',
    values: args,
  });
};

module.exports = signupUser;
