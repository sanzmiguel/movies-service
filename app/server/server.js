const express = require('express');
const bodyparser = require('body-parser');
const routes = require('../routes');

const createServer = () => {
  const app = express();
  app.use(bodyparser.urlencoded({ extended: true }));
  app.use('/', routes);

  return app;
};

const port = process.env.PORT || 3000;
const app = createServer(routes);

app.listen(port, (err) => {
  if (err) {
    throw new Error('Error creating server');
  }
});
