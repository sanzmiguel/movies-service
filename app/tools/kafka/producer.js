const kafka = require('kafka-node');

let producer;

const createProducer = client => new Promise((resolve, reject) => {
  producer = new kafka.Producer(client);
  producer.on('ready', () => resolve());
  producer.on('error', error => reject(error));
});

const sendMessageToTopic = (topic, message) => new Promise((resolve, reject) => {
  const payload = { topic, message };
  producer.send(payload, (error, data) => {
    if (error) {
      reject(error);
    }
    resolve(data);
  });
});

module.exports = {
  createProducer,
  sendMessageToTopic,
};
