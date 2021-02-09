/* eslint-disable no-console */
const Boom = require('@hapi/boom');
const { getFoodCategory } = require('../database/queries');

const foodCategory = async (req, res, next) => {
  const { user } = req;
  const { id, categoryId } = req.params;

  try {
    if (!user) {
      throw Boom.unauthorized('you are not logged in');
    }
    const { rows, rowCount } = await getFoodCategory(id, categoryId);
    if (rowCount === 0) {
      res
        .status(200)
        .json({ status: 200, data: null, message: 'no food to show' });
    } else {
      res.status(200).json({
        status: 200,
        data: rows,
        message: `${rowCount} meals were found`,
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = foodCategory;
