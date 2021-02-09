const router = require('express').Router();
const { clientError, serverError } = require('./middlewares');
const { login, signup, healthNews, foodCategory } = require('./controllers');

router.get('/healthnews', healthNews);
router.post('/signup', signup);
router.post('/login', login);

router.get('/user/:id/category/:categoryId/food', foodCategory);

router.use(clientError);
router.use(serverError);

module.exports = router;
