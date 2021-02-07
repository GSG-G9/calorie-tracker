
module.exports = serverError;
const clientError = (req, res) => {
    res.status(404).send({statusCode: 404, message: "page not found"});
}
const serverError = (err, req, res, next) => {
  console.log(err)
    res.status(err.output.statusCode || 500).json({
      message: err.output.payload.message || "Internl Server Error",
      statusCode: err.output.statusCode || 500,
  });
};


module.exports = {clientError, serverError};
