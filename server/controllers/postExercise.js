const Boom = require('@hapi/boom');
const { addExercise } = require('../database/queries');
const { exerciseValidation } = require('../utils');

const postExercise = async (req, res, next) => {
  const {
    user: { id },
  } = req;
  const { exerciseDuration } = req.body;
  const { exerciseID } = req.params;
  try {
    try {
      await exerciseValidation.validateAsync(
        { exerciseDuration, exerciseID },
        { abortEarly: false },
      );
    } catch (error) {
      throw Boom.badRequest(error.details.map((e) => e.message).join('\n'));
    }
    await addExercise(id, exerciseID, exerciseDuration);
    res
      .status(200)
      .json({ status: 200, message: 'exercise added successfully' });
  } catch (err) {
    next(err);
  }
};

module.exports = postExercise;
