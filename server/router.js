const router = require('express').Router();
const { clientError, serverError } = require('./middlewares');
const { login, signup } = require('./controllers');

router.post('/signup', signup);
router.post('/login', login);

router.use(clientError);
router.use(serverError);

module.exports = router;
