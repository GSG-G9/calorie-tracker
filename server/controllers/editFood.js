const Boom = require('@hapi/boom');
const { editFoodGrams } = require('../database/queries');
const { foodAmountValidation } = require('../utils');

const editFood = async (req, res, next) => {
  const {
    user: { id },
  } = req;

  const { quantityInGrams, userFoodRelationId } = req.body;
  try {
    if (!id) {
      throw Boom.unauthorized('you are not logged!');
    }
    try {
      await foodAmountValidation.validateAsync(
        { quantityInGrams },
        { abortEarly: false },
      );
    } catch (error) {
      throw Boom.badRequest(error.details.map((e) => e.message).join('\n'));
    }

    const { rowCount } = await editFoodGrams(
      userFoodRelationId,
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
