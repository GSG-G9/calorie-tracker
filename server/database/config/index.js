const buildFunction = require('./build.js');
const connection = require('./connection.js');

buildFunction()
  // eslint-disable-next-line no-console
  .then(() => console.log('Build Success'))
  // eslint-disable-next-line no-console
  .catch(() => console.log('Build Fails'))
  .finally(() => connection.end());
