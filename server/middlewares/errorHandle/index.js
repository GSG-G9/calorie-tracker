const clientError = (req, res) => {
    res.status(404).send({statusCode: 404, message: "page not found"});
}

const serverError = (err, req, res, next) => {
    const message = err.message || "something went wrong";
    const status = err.statusCode || 500;

    res.status(status).send({statusCode: status, message: message});
}

module.exports = {clientError, serverError};