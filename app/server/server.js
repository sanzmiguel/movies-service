const express = require('express');
const bodyparser = require('body-parser');
const routes = require('../routes');
const redisTools = require('../tools/redis');

const createServer = () => {
  const app = express();
  app.use(bodyparser.urlencoded({ extended: true }));
  app.use(bodyparser.json());
  app.use('/', routes);

  return app;
};

const launchServer = async () => {
  const port = process.env.PORT || 3000;
  const app = createServer(routes);
  try {
    await redisTools.init();
    await app.listen(port);
  } catch (error) {
    throw new Error(error);
  }
};

launchServer();
