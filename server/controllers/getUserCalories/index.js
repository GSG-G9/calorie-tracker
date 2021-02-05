const {
	getUserCalories,
	calculateUserFoodCalories,
	calculateUserExercisesCalories,
} = require('../../database/queries');

module.exports = async (req, res, next) => {
	// should get the user id from the req.userId when the Auth is Completed.
	try {
		const userId = 1;
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
