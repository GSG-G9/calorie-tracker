const { insertFoodQuery } = require("../../database/queries");
const Boom = require("boom");
const { insertFoodValidation } = require("../../utils");

const insertFoodController = async (req, res, next) => {
  const { grams } = req.body;
  const {id:user_id, categoryId, foodId} = req.params;
  try {
    try {
      await insertFoodValidation.validateAsync({
        user_id,
        foodId,
        categoryId,
        grams
      }, { abortEarly: false } );
    } catch (err) {
      throw Boom.badRequest(err.details.map((e) => e.message).join('\n'));
    }
    const foodData = await insertFoodQuery(user_id, foodId, categoryId,grams);
    res.json({ message: "Food Successfully Added", status: 200 });
  } catch (err) {
    next(err);
  }
};

module.exports = { insertFoodController };
