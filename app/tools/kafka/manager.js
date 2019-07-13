const kafka = require('kafka-node');
const producer = require('./producer');
const consumer = require('./consumer');

const createTopic = (client, topic) => new Promise((resolve, reject) => {
  client.createTopics([topic], (error, result) => {
    if (error) {
      reject(error);
    }
    resolve(result);
  });
});

const setup = async () => {
  const client = new kafka.KafkaClient();
  await createTopic(client, 'topic-test');
  await producer.createProducer(client);
  await consumer.createConsumer(client, 'topic-test');
};

module.exports = {
  setup,
};
