const Boom = require('@hapi/boom');
const { insertFoodQuery } = require('../../database/queries');
const { insertFoodValidation } = require('../../utils');

const insertFoodController = async (req, res, next) => {
  const { grams } = req.body;
  const { id: userId } = req.user;
  const { categoryId, foodId } = req.params;
  try {
    try {
      await insertFoodValidation.validateAsync(
        {
          userId,
          foodId,
          categoryId,
          grams,
        },
        { abortEarly: false },
      );
    } catch (err) {
      throw Boom.badRequest(err.details.map((e) => e.message).join('\n'));
    }
    await insertFoodQuery(userId, foodId, categoryId, grams);
    res.json({ message: 'Food Successfully Added', status: 200 });
  } catch (err) {
    next(err);
  }
};

module.exports = { insertFoodController };
