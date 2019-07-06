const redis = require('redis');
const config = require('../config/redis');

let client;

const init = () => new Promise((resolve, reject) => {
  client = redis.createClient(config);
  client.on('error', reject);
  client.on('ready', resolve);
});

const get = key => new Promise((resolve, reject) => {
  client.get(key, (error, response) => {
    if (error) {
      reject(error);
    } else {
      resolve(JSON.parse(response));
    }
  });
});

const set = (key, value) => new Promise((resolve, reject) => {
  client.set(key, JSON.stringify(value), (error, response) => {
    if (error) {
      reject(error);
    } else if (response) {
      client.expire(key, config.expireTime);
      resolve(response);
    } else {
      resolve();
    }
  });
});

const deleteFn = key => new Promise((resolve, reject) => {
  client.del(key, (error) => {
    if (error) {
      reject(error);
    } else {
      resolve();
    }
  });
});

module.exports = {
  init,
  get,
  set,
  delete: deleteFn,
};
