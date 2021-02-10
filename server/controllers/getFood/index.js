const { getFood } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const { rows } = await getFood();
    return res.status(200).json({
      message: 'success',
      status: 200,
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};
