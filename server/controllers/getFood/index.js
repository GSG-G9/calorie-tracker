const { getFood } = require('../../database/queries');

module.exports = (req, res,next) => {
  getFood().then(({ rows }) =>
    res.status(200).json({
      message: 'success',
      status: 200,
      data: rows,
    })
  ).catch(next);
};
