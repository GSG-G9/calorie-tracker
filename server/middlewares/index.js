const { serverError, clientError } = require('./errorHandle');
const Auth = require('./auth');

module.exports = {
  serverError,
  clientError,
  Auth,
};
