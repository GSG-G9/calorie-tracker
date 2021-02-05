const connection = require('../../config/connection');

module.exports = async (userId) => {
  const {
    rows: [{ weight: userWeight }],
  } = await connection.query({
    text: 'SELECT weight FROM users where id=$1',
    values: [userId],
  });

  /*
	Exercise Duration = 30 min
	User Weight = 100 kg
	* 1000 to convert from kcal to cal
	* 3.5/200 to convert from oxygen consumption to calories
	calories = 1000 * 100 kg * 3.5 * MET * 30 / 200
	*/
  return connection.query({
    text:
      'SELECT SUM($1* 1000 * 3.5 * exercises.met * UserExerciseRelation.exercise_duration_in_minutes / 200 ) as userExercisesCalories FROM UserExerciseRelation INNER JOIN exercises ON UserExerciseRelation.exercises_id=exercises.id WHERE UserExerciseRelation.users_id=$2 and UserExerciseRelation.created_at = current_date',
    values: [userWeight, userId],
  });
};
