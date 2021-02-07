const joi = require('joi');

const schema = joi.object({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().alphanum().required(),
  gender: joi.string().required(),
  age: joi.number().required(),
  weight: joi.number().required(),
  height: joi.number().required(),
  goalWeight: joi.number().required(),
  activity_id: joi.number().required(),

});
module.exports = schema
