const router = require('express').Router();
const { clientError, serverError } = require('./middlewares');
const { login, healthNews } = require('./controllers');

router.get('/healthnews', login)
router.post('/login', login);

router.use(clientError);
router.use(serverError);

module.exports = router;
