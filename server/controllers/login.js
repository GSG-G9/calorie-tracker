const bcrypt = require("bcrypt");
const Boom = require("boom");
const { validateSchema, signToken, boomify } = require("../utils");
const { getUser } = require("../database");

const login = (req, res, next) => {
  const { email, password } = req.body;
  let userID;
  validateSchema
    .validateAsync({ email, password })
    .catch(() => {
      throw Boom.badRequest("invalid information");
    })
    .then(() => getUser(email))
    .then(({ rows, rowCount }) => {
      if (rowCount === 0) {
        throw Boom.unauthorized("email doesn't exist");
      }
      const user = rows[0];
      userID = user.id;

      return bcrypt.compare(password, user.password);
    })
    .then((authorized) => {
      if (!authorized) {
        throw Boom.unauthorized('invalid password');
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
