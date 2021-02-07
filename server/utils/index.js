const { loginSchema, signupSchema } = require('./validation');
const signToken = require('./signToken');

module.exports = {
  loginSchema,
  signupSchema,
  signToken,
};
