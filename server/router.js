const router = require('express').Router();
const {
  login,
  signup,
  healthNews,
  foodCategory,
  getFood,
} = require('./controllers');

const { clientError, serverError, Auth } = require('./middlewares');

router.get('/healthnews', healthNews);
router.post('/signup', signup);
router.post('/login', login);
router.use(Auth);

router.get('/user/:id/category/:categoryId/food', foodCategory);
router.get('/food', getFood);

router.use(clientError);
router.use(serverError);

module.exports = router;
