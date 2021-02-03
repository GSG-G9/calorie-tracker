const buildFunction = require('./build.js');
const connection = require('./connection.js');

buildFunction()
	.then(() => console.log('Build Success'))
	.catch(() => console.log('Build Fails'))
	.finally(() => connection.end());
