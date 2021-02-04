const {getFood} = require("./controllers");
const {clientError, serverError} = require("./middlewares")
const router = require('express').Router();


router.get('/hi', (req, res) => {
    res.send('hello')
});


router.get('/food',getFood)

router.use(clientError);
router.use(serverError);


module.exports = router

