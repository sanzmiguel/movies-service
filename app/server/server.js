const express = require('express');
const bodyparser = require('body-parser');
const routes = require('../routes');
const redisTools = require('../tools/redis');
const logger = require('../tools/logger');
const errorHandler = require('../tools/errors/handler');

const createServer = () => {
  const app = express();
  app.use(bodyparser.urlencoded({ extended: true }));
  app.use(bodyparser.json());
  app.use('/', routes);
  app.use(errorHandler);

  return app;
};

const launchServer = async () => {
  const port = process.env.PORT || 3000;
  const app = createServer(routes);
  try {
    await redisTools.init();
    logger.info('Redis is initialized');
    await app.listen(port);
    logger.info(`Server listening in port ${port}`);
  } catch (error) {
    logger.error('Error launching server', error);
    throw new Error(error);
  }
};

launchServer();
