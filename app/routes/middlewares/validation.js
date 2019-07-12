const Joi = require('@hapi/joi');
const httpStatus = require('http-status');
const ApiError = require('../../tools/errors/apiError');

const validate = schema => (req, res, next) => {
  const { error } = Joi.validate(req.body, schema);
  if (error) {
    next(new ApiError(httpStatus['400_MESSAGE'], httpStatus.BAD_REQUEST, 'MOVIES-1'));
  }
  next();
};

module.exports = validate;
