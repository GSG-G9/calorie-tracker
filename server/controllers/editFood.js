const Boom = require('@hapi/boom');
const { editFoodGrams } = require('../database/queries');

const editFood = async (req, res, next) => {
  const {
    user: { id },
  } = req;
  const { categoryId, foodId } = req.params;
  const { quantityInGrams } = req.body;
  try {
    if (!id) {
      throw Boom.unauthorized('you are not logged!');
    }
    if (quantityInGrams < 0 || typeof quantityInGrams !== 'number') {
      throw Boom.badRequest('invalid value');
    }
    const { rowCount } = await editFoodGrams(
      id,
      categoryId,
      foodId,
      quantityInGrams,
    );

    if (rowCount === 0) {
      throw Boom.badRequest('update failed');
    }

    res
      .status(200)
      .json({ status: 200, message: 'updated food amount successfully' });
  } catch (err) {
    next(err);
  }
};

module.exports = editFood;
