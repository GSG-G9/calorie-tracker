const router = require('express').Router();
const { clientError, serverError } = require('./middlewares');
const { healthNews } = require('./controllers');

router.get('/healthnews', healthNews);

router.use(clientError);
router.use(serverError);

module.exports = router;
