const {clientError, serverError} = require("./middlewares");
const {login} = require("./controllers")
const router = require('express').Router();


router.post("/login", login);

router.use(clientError);
router.use(serverError);


module.exports = router

