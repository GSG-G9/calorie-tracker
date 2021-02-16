const Boom = require('@hapi/boom');
const { getFoodById } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const { user } = req;
    const { categoryId, foodId } = req.params;
    if (!user) {
      throw Boom.unauthorized('you are not logged in');
    }
    if (categoryId > 4 || categoryId < 1) {
      throw Boom.notFound('category not found!');
    }

    const {
      rows: [foodItemNutrition],
      rowCount,
    } = await getFoodById(foodId);
    if (rowCount === 0) {
      return Boom.notFound('this food item not found');
    }

    return res.status(200).json({
      status: 200,
      message: 'success',
      data: foodItemNutrition,
    });
  } catch (err) {
    next(err);
  }
};
