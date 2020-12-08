const User = require('../models/User');

const signIn = async (req, res, next) => {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if (user) {
      if (user.password === password) {
        return res.status(201).send({data: user});
      }
      return res.status(203).send({data: 'Password incorrect'});
    }
    return res.status(203).send({data: 'User not found'});
  } catch (err) {
    next(err);
  }
};
const signUp = async (req, res, next) => {
  try {
    const {email} = req.body;
    const checkUser = await User.findOne({email});
    if (checkUser) {
      return res.status(203).send({data: 'This email is already exists'});
    }
    await new User(req.body).save();
    return res.status(201).send({data: 'Sign up successfully'});
  } catch (err) {
    next(err);
  }
};

module.exports = {
  signIn,
  signUp,
};
