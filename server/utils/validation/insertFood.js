const Joi = require("joi");

const insertFoodValidation = Joi.object().keys({
  user_id: Joi.number().required().positive(),
  foodId: Joi.number().required().positive(),
  categoryId: Joi.number().required().positive(),
  grams: Joi.number().required().positive(),
});

module.exports = insertFoodValidation
