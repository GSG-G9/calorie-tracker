const connection = require('../config/connection');

const addExercise = (userID, exerciseID, exerciseTime) => {
  const sql = {
    text:
      'INSERT INTO UserExerciseRelation(users_id, exercises_id, exercise_duration_in_minutes) VALUES ($1, $2, $3)',
    values: [userID, exerciseID, exerciseTime],
  };
  return connection.query(sql);
};

module.exports = addExercise;
