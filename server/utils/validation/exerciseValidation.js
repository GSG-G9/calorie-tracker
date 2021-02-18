const Joi = require('joi');

const exerciseValidation = Joi.object().keys({
  exerciseDuration: Joi.number().greater(0).required(),
  exerciseID: Joi.number().greater(0).required(),
});

module.exports = exerciseValidation;
