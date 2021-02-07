const router = require('express').Router();
const { clientError, serverError } = require('./middlewares');

router.get('/hi', (req, res) => {
  res.send('hello');
});

router.use(clientError);
router.use(serverError);

module.exports = router;
