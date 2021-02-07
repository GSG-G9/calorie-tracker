const { getNews } = require('../database');

const healthNews = async (req, res, next) => {
  try {
    const { rows } = await getNews();
    res.status(200).json({ status: 200, data: rows });
  } catch (err) {
    next(err);
  }
};

module.exports = healthNews;
