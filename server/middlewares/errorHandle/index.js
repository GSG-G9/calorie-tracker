const clientError = (req, res) => {
    res.status(404).send({statusCode: 404, message: "page not found"});
}

const serverError = (err, req, res, next) => {
    const message = err.msg || "something went wrong";
    const status = err.status || 500;
console.log("error message: ", message);
    res.status(status).send({statusCode: status, message: message});
}

module.exports = {clientError, serverError};