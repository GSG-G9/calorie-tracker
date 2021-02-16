const Boom = require('@hapi/boom');
const { getProfile } = require('../../database/queries');

const getProfileData = async (req, res, next) => {
  const {
    user: { id },
  } = req;

  try {
    if (!id) {
      throw Boom.unauthorized('you are not logged in');
    }
    const { rows } = await getProfile(id);
    return res.status(200).json({
      message: 'success',
      status: 200,
      data: rows,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getProfileData;
