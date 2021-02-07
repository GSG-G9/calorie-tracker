const bcrypt = require("bcrypt");
const Boom = require("@hapi/boom");

const signupSchema = require("../utils/validation");
const getUserByEmail = require("../database/queries/getEmail");
const signupUser = require("../database/queries/signup");
const getUserActivity = require("../database/queries/getUserActivity");
const calculateDailyCalories = require("../utils/dailyCalories");

const signup = async (req, res, next) => {
  try {
    const userData = req.body;
    const { activity_id, email} = userData;
    try {
      await signupSchema.validateAsync(userData, { abortEarly: false });
    } catch (err) {
      console.log(err);
      throw Boom.badRequest(
        err.details.map(({ message }) => message).join("\n")
      );
    }

    const { rowCount } = await getUserByEmail(email);

    if (rowCount > 0) {
      throw Boom.conflict("user already exists");
    }
    const {
      rows: [{ activity_value: activityValue }],
    } = await getUserActivity(activity_id);

    let dailyCaloriesGoal = calculateDailyCalories({
      ...userData,
      activityValue,
    });

    const hashedPassword = await bcrypt.hash(password, 10);
    await signupUser({
      ...userData,
      password: hashedPassword,
      dailyCaloriesGoal,
    });
    res.status(201).json({ status: 201, message: "signed up successfully" });
  } catch (err) {
    next(err);
  }
};
module.exports = signup;
