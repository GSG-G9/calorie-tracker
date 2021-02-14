const bcrypt = require('bcrypt');
const Boom = require('@hapi/boom');
const { loginSchema, signToken } = require('../utils');
const { getUserByEmail } = require('../database/queries');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    try {
      await loginSchema.validateAsync(
        { email, password },
        { abortEarly: false },
      );
    } catch (error) {
      throw Boom.badRequest(error.details.map((e) => e.message).join('\n'));
    }

    const { rows, rowCount } = await getUserByEmail(email);
    if (rowCount === 0) {
      throw Boom.unauthorized("email doesn't exist");
    }

    const user = rows[0];
    const authorized = await bcrypt.compare(password, user.password);
    if (!authorized) {
      throw Boom.unauthorized('invalid password');
    }
    const token = await signToken({
      email: user.email,
      name: `${user.firstname} ${user.lastname}`,
      image: user.image,
      id: user.id,
    });

    res.cookie('token', token, { httpOnly: true });
    res.status(200).json({ status: 200, message: 'logged in successfully' });
  } catch (err) {
    next(err);
  }
};
module.exports = login;
