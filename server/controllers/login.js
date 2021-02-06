const bcrypt = require("bcrypt");
const Boom = require("@hapi/boom");
const { validateSchema, signToken } = require("../utils");
const { getUser } = require("../database");

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    try {
      await validateSchema.validateAsync(
        { email, password },
        { abortEarly: false }
      );
    } catch (error) {
      throw Boom.badRequest(error.details.map((e) => e.message).join("\n"));
    }

    const { rows, rowCount } = await getUser(email);
    if (rowCount === 0) {
      throw Boom.badData("email doesn't exist");
    }

    const user = rows[0];
    const authorized = await bcrypt.compare(password, user.password);
    if (!authorized) {
      throw Boom.unauthorized("invalid password");
    }
    const token = await signToken({
      email: user.email,
      name: user.first_name + " " + user.last_name,
      image: user.image,
    });

    res.cookie("token", token, { httpOnly: true });
    res.status(200).json({ status: 200, message: "logged in successfully" });
  } catch (err) {
    next(err);
  }
};
module.exports = login;
