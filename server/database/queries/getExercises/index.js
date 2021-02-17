const connection = require('../../config/connection');

module.exports = (userId) => {
  const userWeight = connection.query({
    text: 'SELECT weight from users where id=$1',
    values: [userId],
  });

  const exercises = connection.query('SELECT * FROM exercises');

  const userExercises = connection.query(
    'SELECT id,exercises_id ,exercise_duration_in_minutes as duration from UserExerciseRelation where users_id=$1 and created_at=current_date',
    [userId],
  );

  return Promise.all([userWeight, exercises, userExercises]);
};
