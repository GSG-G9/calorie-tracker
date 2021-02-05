const serverError = (err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    message: err.message || "Internl Server Error",
    statusCode: err.output.statusCode || 500,
  });
};
module.exports = serverError;
