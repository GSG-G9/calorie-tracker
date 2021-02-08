const joi = require('joi');

const signupSchema = joi.object({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().alphanum().min(8).required(),
  gender: joi.string().required(),
  age: joi.number().required(),
  weight: joi.number().required(),
  height: joi.number().required(),
  goalWeight: joi.number().required(),
  activityId: joi.number(),
});
module.exports = signupSchema;
