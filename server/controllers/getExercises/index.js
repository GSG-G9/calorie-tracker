const { getExercises } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const {
      user: { id: userId },
    } = req;
    const [
      {
        rows: [{ weight }],
      },
      { rows: exercises },
      { rows: userExercises },
    ] = await getExercises(userId);
    const data = exercises.map((el) => ({
      ...el,
      caloriesPerHour: Math.floor((3.5 / 200) * 60 * weight * el.met),
    }));
    res.status(200).json({
      data: { data, userExercises },
      message: 'success',
      status: 200,
    });
  } catch (err) {
    next(err);
  }
};
