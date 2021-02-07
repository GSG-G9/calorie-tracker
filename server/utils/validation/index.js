const Joi = require('joi');

const validateSchema = Joi.object().keys({
  email: Joi.string().email().required().messages({
    'string.empty': `email cannot be empty`,
    'any.required': `email is a required field`,
  }),
  password: Joi.string().alphanum().min(8).required().messages({
    'string.min': `password should be at least 8 characters`,
    'any.required': `password is a required field`,
  }),
});

module.exports = validateSchema;
