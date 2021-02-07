const router = require('express').Router();
const { clientError, serverError } = require('./middlewares');
const { login, healthNews } = require('./controllers');

router.get('/healthnews', healthNews);
router.post('/login', login);

router.use(clientError);
router.use(serverError);

module.exports = router;
