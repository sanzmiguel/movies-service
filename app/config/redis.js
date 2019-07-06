module.exports = {
  host: process.env.REDIS_HOST || 'redis',
  port: process.env.REDIS_PORT || '6379',
  prefix: process.env.REDIS_PREFIX || 'MOVIES',
  expireTime: process.env.REDIS_EXPIRE_TIME || 600,
};
