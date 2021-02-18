const Boom = require('@hapi/boom');
const {
  getExercises,
  getProfile,
  getUserExercise,
} = require('../database/queries');

const getExercise = async (req, res, next) => {
  const {
    user: { id },
  } = req;
  try {
    if (!id) {
      throw Boom.unauthorized('you are not logged!');
    }
    const exercises = await getExercises();
    if (exercises.rowCount === 0) {
      throw Boom.notFound('no exercises found!');
    }
    const result = await getProfile(id);
    if (result.rowCount === 0) {
      throw Boom.notFound('no user found');
    }
    const userExercises = await getUserExercise(id);
    if (userExercises.rowCount === 0) {
      throw Boom.notFound('no exercises found');
    }
    const data = exercises.rows.map((row) => ({
      id: row.id,
      exercise_name: row.exercise_name,
      caloriesPerHour: Math.floor(
        (3.5 / 200) * 60 * result.rows[0].weight * row.met,
      ),
    }));

    res
      .status(200)
      .json({ status: 200, data: { data, userExercises: userExercises.rows } });
  } catch (err) {
    next(err);
  }
};

module.exports = getExercise;
