const bcrypt = require("bcrypt");
const { validateSchema, signToken } = require("../utils/index");

const login = (req, res, next) => {
  const { email, password } = req.body;

  validateSchema
    .validateAsync({ email, password })
    .catch((err) => {
      throw err;
    })
    .then(() => {
      //check if user doesn't exist in database
      //use bcrypt.compare to compare the password with the one in the database
    })
    .then((authorized) => {
      if (!authorized) {
        //throw error incorrect password
      } else {
        return signToken(userID); //comes from database
      }
    })
    .then((token) => {
      res.cookie("token", token);
      res.status(200).json({ status: 200, message: "logged in successfully" });
    })
    .catch(next);
};

module.exports = login;
