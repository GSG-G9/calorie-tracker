const {
  getUserCalories,
  calculateUserFoodCalories,
  calculateUserExercisesCalories,
} = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const {
      user: { id: userId },
    } = req;
    const [
      {
        rows: [{ usercalories: userCalories }],
      },
      {
        rows: [{ userfoodcalories: userFoodCalories }],
      },
      {
        rows: [{ userexercisescalories: userExercisesCalories }],
      },
    ] = await Promise.all([
      getUserCalories(userId),
      calculateUserFoodCalories(userId),
      calculateUserExercisesCalories(userId),
    ]);
    const remainingCalories =
      userCalories - userFoodCalories + userExercisesCalories;
    res.json({
      status: 200,
      message: 'success',
      data: {
        userCalories,
        userFoodCalories,
        userExercisesCalories,
        remainingCalories,
      },
    });
  } catch (err) {
    next(err);
  }
};
