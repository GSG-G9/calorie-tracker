const clientError = (req, res) => {
  res.status(404).send({ statusCode: 404, message: 'page not found' });
};
// eslint-disable-next-line no-unused-vars
const serverError = (err, req, res, next) => {
  res.status(err.output.statusCode || 500).json({
    message: err.output.payload.message || 'Internal Server Error',
    statusCode: err.output.statusCode || 500,
  });
};

module.exports = { clientError, serverError };
