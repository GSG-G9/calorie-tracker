const {clientError, serverError} = require("./middlewares")
const router = require('express').Router();
const {getUserCalories} = require('./controllers')

router.get('/hi', (req, res) => {
    res.send('hello')
});

router.get('/user/calories',getUserCalories)

router.use(clientError);
router.use(serverError);


module.exports = router

