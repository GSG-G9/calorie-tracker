const connection = require('../config/connection');

const getNews = () => {
  const sql = 'SELECT * FROM news ORDER BY created_at DESC';
  return connection.query(sql);
};

module.exports = getNews;
