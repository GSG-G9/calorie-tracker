const {clientError, serverError} = require("./middlewares")
const router = require('express').Router();
const {insertFoodController} = require('./controllers');

router.get('/hi', (req, res) => {
    res.send('hello')
});

router.post('/user/:id/category/:categoryId/food/:foodId',insertFoodController);

router.use(clientError);
router.use(serverError);



module.exports = router

