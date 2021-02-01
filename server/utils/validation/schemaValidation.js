const Joi = require("joi");

const validateSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().alphanum().required(),
});


module.exports = validateSchema;