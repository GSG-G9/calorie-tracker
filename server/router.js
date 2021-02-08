const router = require('express').Router();
const { clientError, serverError, Auth } = require('./middlewares');
const { login, signup, healthNews } = require('./controllers');

router.get('/healthnews', healthNews);
router.post('/signup', signup);
router.post('/login', login);
router.use(Auth);

router.use(clientError);
router.use(serverError);

module.exports = router;
