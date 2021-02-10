const calculateUserFoodCalories = require('./calculateUserFoodCalories');
const getUserCalories = require('./getUserCalories');
const calculateUserExercisesCalories = require('./calculateUserExercisesCalories');
const getFood = require('./getFood');
const getNews = require('./getNews');
const getUserByEmail = require('./getEmail');
const signupUser = require('./signup');
const getUserActivity = require('./getUserActivity');

module.exports = {
  getNews,
  getUserByEmail,
  signupUser,
  getUserActivity,
  getFood,
  calculateUserFoodCalories,
  getUserCalories,
  calculateUserExercisesCalories,
};
