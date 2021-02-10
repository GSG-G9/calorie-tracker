const router = require('express').Router();
const { getFood } = require('./controllers');

const { clientError, serverError, Auth } = require('./middlewares');
const { login, signup, healthNews } = require('./controllers');

router.get('/healthnews', healthNews);
router.post('/signup', signup);
router.post('/login', login);
router.use(Auth);

router.get('/food', getFood);

router.use(clientError);
router.use(serverError);

module.exports = router;
