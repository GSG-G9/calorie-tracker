const router = require('express').Router();

const signup = require('./controllers');

const { clientError, serverError } = require('./middlewares');
const { healthNews } = require('./controllers');

router.get('/healthnews', healthNews);
router.post('/signup', signup);

router.use(clientError);
router.use(serverError);

module.exports = router;
