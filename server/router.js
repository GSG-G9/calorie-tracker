const router = require('express').Router();

const {
  login,
  signup,
  healthNews,
  foodCategory,
  getFood,
  getUserCalories,
  getFoodById,
  insertFoodController,
  deleteFoodController,
  editFood,
  getProfileData,
} = require('./controllers');

const { clientError, serverError, Auth } = require('./middlewares');

router.get('/healthnews', healthNews);
router.post('/signup', signup);
router.post('/login', login);
router.use(Auth);

router.get('/category/:categoryId/food', foodCategory);
router.delete('/food/:categoryID/:foodID', deleteFoodController);
router.patch('/food/:categoryId/:foodId', editFood);

router.route('/category/:categoryId/food/:foodId').get(getFoodById);
router.get('/food', getFood);
router.get('/user/calories', getUserCalories);

router.get('/profile', getProfileData);

router.post('/category/:categoryId/food/:foodId', insertFoodController);

router.use(clientError);
router.use(serverError);

module.exports = router;
