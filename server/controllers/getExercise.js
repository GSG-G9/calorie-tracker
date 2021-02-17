const Boom = require('@hapi/boom');
const { getExercises } = require('../database/queries');

const getExercise = async (req, res, next) => {
  const { user } = req;
  try {
    if (!user) {
      throw Boom.unauthorized('you are not logged!');
    }
    const { rowCount, rows } = await getExercises();
    if (rowCount === 0) {
      throw Boom.notFound('no exercises found!');
    }
    res.status(200).json({ status: 200, data: rows });
  } catch (err) {
    next(err);
  }
};

module.exports = getExercise;
