const { Pool } = require('pg');
require('dotenv').config({ path: './config.env' });

const {
  DEV_DATABASE_URL,
  TEST_DATABASE_URL,
  DATABASE_URL,
  NODE_ENV,
} = process.env;

let dbUrl = '';
switch (NODE_ENV) {
  case 'production':
    dbUrl = DATABASE_URL;
    break;
  case 'development':
    dbUrl = DEV_DATABASE_URL;
    break;
  case 'test':
    dbUrl = TEST_DATABASE_URL;
    break;
  default:
    throw new Error('No Database url!!!');
}
const options = {
  connectionString: dbUrl,
  ssl: NODE_ENV === 'production',
};

module.exports = new Pool(options);
