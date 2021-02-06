const serverError = (err, req, res, next) => {
  console.log(err)
    res.status(err.output.statusCode || 500).json({
      message: err.output.payload.message || "Internl Server Error",
      statusCode: err.output.statusCode || 500,
  });
};
module.exports = serverError;
