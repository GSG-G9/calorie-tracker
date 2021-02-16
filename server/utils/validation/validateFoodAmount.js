const Joi = require('joi');

const foodAmountValidation = Joi.object().keys({
  quantityInGrams: Joi.number().greater(0).integer().required(),
});

module.exports = foodAmountValidation;
