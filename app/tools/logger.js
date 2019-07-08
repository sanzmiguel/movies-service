const winston = require('winston');

const SERVICE_LABEL = 'Movies service';

const myFormat = winston.format.printf(({
  level, message, label, timestamp,
}) => `${timestamp} [${label}] ${level}: ${message}`);

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.label({ label: SERVICE_LABEL }),
    winston.format.timestamp(),
    myFormat,
  ),
  transports: [new winston.transports.Console()],
});

module.exports = logger;
