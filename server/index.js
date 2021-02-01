const { app } = require('./app');

const port = app.get('port');

app.listen(port, () => console.log('hey from port 5000'));

module.exports = { app };
