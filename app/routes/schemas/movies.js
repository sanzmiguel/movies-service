const Joi = require('@hapi/joi');

const CURRENT_YEAR = new Date().getFullYear();

const schema = Joi.object().keys({
  title: Joi.string().required(),
  year: Joi.string().min(1900).max(CURRENT_YEAR).required(),
  director: Joi.string().required(),
});

module.exports = schema;
