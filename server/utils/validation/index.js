const joi = require('joi');

 const schema = joi.object({
  username: joi.string().required(),
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().alphanum().required(),
  gender: joi.string().required(),
  minAge: joi.number().required(),
  maxAge: joi.number().required(),
  weight: joi.number().required(),
  height: joi.number().required(),
  goalWeight: joi.number().required(),

});
module.exports = schema
