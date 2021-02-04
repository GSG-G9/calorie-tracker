const { insertFoodQuery } = require("../../database/queries");
const Boom = require("boom");
const { insertFoodValidation } = require("../../utils");

const insertFoodController = async (req, res, next) => {
  const { food_id, food_category_id } = req.body;
  const user_id = req.users_id || 1;
  try {
    try {
      await insertFoodValidation.validateAsync({
        user_id,
        food_id,
        food_category_id,
      });
    } catch (err) {
      throw Boom.badRequest("no meal selected");
    }
    await insertFoodQuery(user_id, food_id, food_category_id);
    res.json({ data: null, message: "success", status: 200 });
  } catch (err) {
    next(err);
  }
};

module.exports = { insertFoodController };
