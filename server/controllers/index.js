const { insertFoodController } = require('./insertFood');
const getUserCalories = require('./getUserCalories');
const getFood = require('./getFood');
const healthNews = require('./healthNews');
const signup = require('./signup');
const login = require('./login');
const foodCategory = require('./foodCategory');
const isAuth = require('./isAuth');

module.exports = {
  healthNews,
  login,
  signup,
  foodCategory,
  getFood,
  getUserCalories,
  insertFoodController,
  isAuth,
};
