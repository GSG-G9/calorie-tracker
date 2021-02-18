const insertFoodQuery = require('./insertFoodQuery');

const calculateUserFoodCalories = require('./calculateUserFoodCalories');
const getUserCalories = require('./getUserCalories');
const calculateUserExercisesCalories = require('./calculateUserExercisesCalories');
const getFood = require('./getFood');
const getNews = require('./getNews');
const getUserByEmail = require('./getEmail');
const signupUser = require('./signup');
const getUserActivity = require('./getUserActivity');
const getFoodCategory = require('./getFoodCategory');
const deleteFood = require('./deleteFood');
const editFoodGrams = require('./editFoodGrams');
const getFoodById = require('./getFoodById');
const getProfile = require('./getProfile');
const addExercise = require('./addExercise');
const getExercises = require('./getExercise');
const getUserExercise = require('./getUserExercise');

module.exports = {
  getExercises,
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
  insertFoodQuery,
  deleteFood,
  editFoodGrams,
  getProfile,
  addExercise,
  getUserExercise,
};
