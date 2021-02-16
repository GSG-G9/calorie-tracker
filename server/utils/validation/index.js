const insertFoodValidation = require('./insertFood');
const signupSchema = require('./signupSchema');
const loginSchema = require('./loginSchema');
const foodAmountValidation = require('./validateFoodAmount');

module.exports = {
  loginSchema,
  signupSchema,
  insertFoodValidation,
  foodAmountValidation,
};
