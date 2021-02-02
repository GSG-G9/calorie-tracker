const { Pool } = require('pg');
require('dotenv').config({ path: './config.env' });

const {
	DATABASE_URL,
	TEST_DATABASE_URL,
	PRODUCTION_DATABASE_URL,
	NODE_ENV,
} = process.env;

//Database Url
let dbUrl = '';

switch (NODE_ENV) {
	case 'production':
		dbUrl = PRODUCTION_DATABASE_URL;
		break;
	case 'development':
		dbUrl = DATABASE_URL;
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
