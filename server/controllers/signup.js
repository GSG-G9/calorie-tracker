
const bcrypt = require('bcrypt');
const Boom = require('boom')

const schema = require('../utils/validation');
const getUserByEmail = require('../database/queries/getEmail');
const signupUser = require('../database/queries/signup');
const calculateDailyCalories = require('../utils/dailyCalories')

 const signup = async (req, res, next) => {
   try{
    const {
      lastName,
      email,
      password,
      firstName,
      gender,
      minAge,
      maxAge,
      weight,
      height,
      goalWeight,
      activity

    } = req.body;
  
    try{
      await schema
          .validateAsync({
            lastName,
            email,
            password,
            firstName,
            gender,
            minAge,
            maxAge,
            weight,
            height,
            goalWeight,
            activity
          })
    }
    catch(err){
      throw Boom.badRequest(err.details[0].message)
    }

  const {rowCount} = await getUserByEmail(email);

  if (rowCount > 0) {
    throw Boom.conflict('user already exists');
   }

   let dailyCaloriesGoal = calculateDailyCalories(gender, activity, weight, height, minAge);

  
    const hashedPassword = await bcrypt.hash(password, 10);
    await signupUser( lastName, hashedPassword, email, firstName, gender, minAge, maxAge, weight, height, goalWeight, dailyCaloriesGoal);
    res.json({ status: 200, message: "signed up successfully" });

   

   }
  catch(err){
    next(err)
  }

  }
module.exports = signup;


