const buildFunction = require('./build.js');
const connection = require('./connection.js');

(async () => {
  try {
    await buildFunction();
    // eslint-disable-next-line no-console
    console.log('Build Success');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Build Fails', err);
  } finally {
    connection.end();
  }
})();
