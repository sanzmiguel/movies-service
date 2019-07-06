module.exports = {
  host: process.env.REDIS_HOST || 'localhost',
  port: process.env.REDIS_PORT || '6379',
  prefix: process.env.REDIS_PREFIX || 'MOVIES',
  expireTime: process.env.REDIS_EXPIRE_TIME || 600,
};
