const connection = require('../config/connection');

const getUserExercise = (userID) => {
  const sql = {
    text:
      'SELECT id,exercises_id ,exercise_duration_in_minutes as duration FROM UserExerciseRelation WHERE users_id =$1',
    values: [userID],
  };
  return connection.query(sql);
};

module.exports = getUserExercise;
