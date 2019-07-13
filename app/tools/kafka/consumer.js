const kafka = require('kafka-node');
const logger = require('../logger');

const createConsumer = (client, topic) => {
  const consumer = kafka.Consumer(client, [topic]);
  consumer.on('message', (message) => {
    logger.info(message);
  });
  consumer.on('error', (error) => {
    logger.error(error);
  });
};

module.exports = {
  createConsumer,
};
