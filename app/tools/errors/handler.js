const logger = require('../logger');

const errorHandler = (error, req, res, next) => {
  if (error) {
    logger.error(error.toString());
    res.status(error.status).send(error);
  }
  next();
};

module.exports = errorHandler;
