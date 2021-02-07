const connection = require('../config/connection');

const getNews = () => {
  const sql = 'SELECT * FROM news';
  return connection.query(sql);
};

module.exports = getNews;
