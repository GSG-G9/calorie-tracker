const Boom = require('@hapi/boom');
const { deleteFood } = require('../database/queries');

const deleteFoodController = async (req, res, next) => {
  const { userFoodRelationId } = req.body;
  const {
    user: { id },
  } = req;

  try {
    if (!id) {
      throw Boom.unauthorized('you are not logged');
    }
    const { rowCount } = await deleteFood(userFoodRelationId);
    console.log(userFoodRelationId);
    if (rowCount === 0) {
      throw Boom.badRequest('delete failed');
    }
    res.status(200).json({ status: 200, message: 'deleted food successfully' });
  } catch (err) {
    next(err);
  }
};

module.exports = deleteFoodController;
