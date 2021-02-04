const bcrypt = require("bcrypt");
const { validateSchema, signToken, boomify } = require("../utils");
const { getUser } = require("../database");

const login = (req, res, next) => {
  const { email, password } = req.body;
  let userID;
  validateSchema
    .validateAsync({ email, password })
    .catch((err) => {
      throw boomify(400, err.details[0].message);
    })
    .then(() => getUser(email))
    .then(({ rows, rowCount }) => {
      if (rowCount === 0) {
        throw boomify(400, "user doesn't exist");
      }
      const user = rows[0];
      userID = user.id;

      return bcrypt.compare(password, user.password);
    }).catch(next)
    .then((authorized) => {
      if (!authorized) {
        throw boomify(400, "incorrect information, check again");
      }
      return signToken(userID);
    })
    .then((token) => {
      res.cookie("token", token, {httpOnly: true });
      res.status(200).json({ status: 200, message: "logged in successfully" });
    })
    .catch(next);
};

module.exports = login;
