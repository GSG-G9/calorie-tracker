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
  isAuth,
  logout,
  deleteFoodController,
  editFood,
  getProfileData,
  postExercise,
  getExercise,
} = require('./controllers');

const { clientError, serverError, Auth } = require('./middlewares');

router.get('/healthnews', healthNews);
router.post('/signup', signup);
router.post('/login', login);
router.use(Auth);

router.get('/isAuth', isAuth);
router.get('/exercise', getExercise);
router.post('/exercises/:exerciseID', postExercise);
router.get('/category/:categoryId/food', foodCategory);

router
  .route('/category/:categoryId/food/:foodId')
  .patch(editFood)
  .delete(deleteFoodController)
  .get(getFoodById)
  .post(insertFoodController);

router.get('/food', getFood);
router.get('/user/calories', getUserCalories);

router.get('/profile', getProfileData);

router.get('/logout', logout);

router.use(clientError);
router.use(serverError);

module.exports = router;
