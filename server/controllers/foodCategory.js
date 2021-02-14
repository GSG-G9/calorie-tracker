const Boom = require('@hapi/boom');
const { getFoodCategory } = require('../database/queries');

const foodCategory = async (req, res, next) => {
  const { user } = req;
  const { categoryId } = req.params;

  try {
    if (!user) {
      throw Boom.unauthorized('you are not logged in');
    }
    if (categoryId > 4 || categoryId < 1) {
      throw Boom.notFound('category not found!');
    }
    const { id: userID } = user;
    const { rows, rowCount } = await getFoodCategory(userID, categoryId);
    console.log(userID);
    if (rowCount === 0) {
      res.status(200).json({ status: 200, data: [] });
    } else {
      res.status(200).json({
        status: 200,
        data: rows,
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = foodCategory;
