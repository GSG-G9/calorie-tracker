const buildFunction = require('./build.js');
const connection = require('./connection.js');

buildFunction()
	.then(() => console.log('Build Success'))
	.catch((e) => console.log('Build Fails',e))
	.finally(() => connection.end());
