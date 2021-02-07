const { readFileSync } = require('fs');
const { join } = require('path');
const connection = require('./connection');
// Build Function
module.exports = () => {
  const sqlSchema = readFileSync(join(__dirname, './build.sql')).toString();
  const sqlFakeData = readFileSync(
    join(__dirname, './fakeData.sql'),
  ).toString();
  return connection.query(sqlSchema + sqlFakeData);
};
