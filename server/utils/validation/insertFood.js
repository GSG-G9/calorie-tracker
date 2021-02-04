const Joi = require("joi");

const insertFoodValidation = Joi.object().keys({
  user_id: Joi.number().required().positive(),
  food_id: Joi.number().required().positive(),
  food_category_id: Joi.number().required().positive(),
});

module.exports = insertFoodValidation
