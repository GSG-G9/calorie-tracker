const {clientError, serverError} = require("./middlewares")
const router = require('express').Router();


router.get('/hi', (req, res) => {
    res.send('hello')
});

router.use(clientError);
router.use(serverError);


module.exports = router

