const calculateUserFoodCalories = require('./calculateUserFoodCalories');
const getUserCalories = require('./getUserCalories');
const calculateUserExercisesCalories = require('./calculateUserExercisesCalories');
const getFood = require('./getFood');
const getNews = require('./getNews');
const getUserByEmail = require('./getEmail');
const signupUser = require('./signup');
const getUserActivity = require('./getUserActivity');
const getFoodCategory = require('./getFoodCategory');
const getFoodById = require('./getFoodById');

module.exports = {
  getNews,
  getUserByEmail,
  signupUser,
  getUserActivity,
  getFoodCategory,
  getFood,
  calculateUserFoodCalories,
  getUserCalories,
  calculateUserExercisesCalories,
  getFoodById,
};
