
const router = require("express").Router();

const signup = require("./controllers");


const { clientError, serverError } = require("./middlewares");
router.post("/signup", signup);


router.use(clientError);
router.use(serverError);

module.exports = router;
