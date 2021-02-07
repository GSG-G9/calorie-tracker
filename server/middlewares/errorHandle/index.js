const clientError = (req, res) => {
  res.status(404).send({ statusCode: 404, message: 'page not found' });
};
// eslint-disable-next-line no-unused-vars
const serverError = (err, req, res, next) => {
  const message = err.message || 'internal server error';
  const status = err.output.statusCode || 500;

  res.status(status).send({ statusCode: status, message });
};

module.exports = { clientError, serverError };
