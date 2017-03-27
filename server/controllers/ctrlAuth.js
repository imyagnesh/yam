const passport = require('passport');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');
const utils = require('../utils');
const { sendJSONresponse, validateSignupForm, validateLoginForm } = utils;
const config = require('../../config');

module.exports.register = (req, res, next) => {
  const validationResult = validateSignupForm(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors,
    });
  }


  return passport.authenticate('local-signup', (err) => {
    if (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        // the 11000 Mongo code is for a duplication email error
        // the 409 HTTP status code is for conflict error
        return res.status(409).json({
          success: false,
          message: 'Check the form for errors.',
          errors: {
            email: 'This email is already taken.',
          },
        });
      }

      return res.status(400).json({
        success: false,
        message: 'Could not process the form.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'You have successfully signed up! Now you should be able to log in.',
    });
  })(req, res, next);
};

module.exports.login = (req, res, next) => {
  const validationResult = validateLoginForm(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors,
    });
  }


  return passport.authenticate('local-login', (err, token) => {
    if (err) {
      if (err.name === 'IncorrectCredentialsError') {
        return res.status(400).json({
          success: false,
          message: err.message,
        });
      }

      return res.status(400).json({
        success: false,
        message: 'Could not process the form.',
      });
    }

    const decodeToken = jwt.verify(token, config.jwtSecret);

    return res.json({
      success: true,
      message: 'You have successfully logged in!',
      username: decodeToken.name,
      token,

    });
  })(req, res, next);
};

module.exports.isUserUnique = (req, res) => {
  if (!req.params.email) {
    sendJSONresponse(res, 400, {
      success: false,
      message: 'email required',
    });
    return;
  }

  User.findOne({ email: new RegExp(['^', req.params.email, '$'].join(''), 'i') }, (err, user) => {
    if (err) {
      sendJSONresponse(res, 400, {
        success: false,
        message: err.message,
      }); return;
    }

    if (!user) {
      sendJSONresponse(res, 200, {
        success: true,
        message: 'You have successfully logged in!',
        data: true,
      });
      return;
    }

    sendJSONresponse(res, 200, {
      success: true,
      message: `"${user.email}" is not unique`,
      data: false,
    });
  });
};
