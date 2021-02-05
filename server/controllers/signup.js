
const bcrypt = require('bcrypt');
const Boom = require('boom')

const schema = require('../utils/validation');
const getUserByEmail = require('../database/queries/getEmail');
const signupUser = require('../database/queries/signup');

 const signup = async (req, res, next) => {
   try{
    const {
      username,
      email,
      password,
      name,
      gender,
      minAge,
      maxAge,
      weight,
      height,
      goalWeight,
    } = req.body;
  
    try{
      await schema
          .validateAsync({
            username,
            email,
            password,
            name,
            gender,
            minAge,
            maxAge,
            weight,
            height,
            goalWeight,
          })
    }
    catch(err){
      throw Boom.badRequest(err.details[0].message)
    }

  const {rowCount} = await getUserByEmail(email);

  if (rowCount > 0) {
    throw Boom.conflict('user already exists');
   }
   else{
    const hashedPassword = await bcrypt.hash(password, 10);
    signupUser(username, hashedPassword, email, name, gender, minAge, maxAge, weight, height, goalWeight);
    res.status(200).json({ status: 200, message: "signed up successfully" });

   }

   }
  catch(err){
    next(err)
  }

  }
module.exports = signup;


