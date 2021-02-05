const connection = require("../../config/connection");

module.exports = async (userId) =>{
	const {
		rows: [{ weight: userWeight }],
	} = await connection.query({
		text: 'SELECT weight FROM users where id=$1',
		values: [userId],
	});

	/*
	https://www.healthline.com/health/what-are-mets#examples
	*/
	return connection.query({
		text:
			'SELECT SUM($1* 3.5 * exercises.met * UserExerciseRelation.exercise_duration_in_minutes / 200 ) as userExercisesCalories FROM UserExerciseRelation INNER JOIN exercises ON UserExerciseRelation.exercises_id=exercises.id WHERE UserExerciseRelation.users_id=$2 and UserExerciseRelation.created_at = current_date',
		values: [userWeight, userId],
	});
}
