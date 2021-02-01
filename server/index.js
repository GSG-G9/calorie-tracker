const { app } = require("./app");

const port = app.get("port");

app.listen(port, () => console.log("App running on port", port));

module.exports = { app };
