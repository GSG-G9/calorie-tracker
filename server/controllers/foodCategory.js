const Boom = require('@hapi/boom');
const { getFoodCategory, getFoodCalorie } = require('../database/queries');

const foodCategory = async (req, res, next) => {
  const { user } = req;
  const { categoryId } = req.params;

  try {
    if (!user) {
      throw Boom.unauthorized('you are not logged in');
    }
    if (categoryId > 4 || categoryId < 1) {
      throw Boom.notFound('category not found!');
    } else {
      const { rows, rowCount } = await getFoodCategory(user.id, categoryId);
      if (rowCount === 0) {
        res.status(200).json({ status: 200, data: [] });
      } else {
        const foodIDs = rows.map(({ id }) => id);

        const foodCalorie = await getFoodCalorie(foodIDs);

        const foodWithCalories = rows.map((row, index) => {
          if (row.id === foodCalorie.rows[index].food_id) {
            return { food: row, calories: foodCalorie.rows[index].calories };
          }
          return null;
        });

        res.status(200).json({
          status: 200,
          data: foodWithCalories,
        });
      }
    }
  } catch (err) {
    next(err);
  }
};

module.exports = foodCategory;
