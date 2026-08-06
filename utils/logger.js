import winston from 'winston';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const logDir = path.join(__dirname, '..', 'logs');

const customFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.printf(({ level, message, timestamp }) =>
    `[${level.toUpperCase()}] ${timestamp} - ${message}`
  )
);

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'debug',
  format: customFormat,
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize(), customFormat),
    }),
    new winston.transports.File({
      filename: path.join(logDir, 'app.log'),
      maxsize: 5_000_000,
      maxFiles: 5,
      tailable: true,
    }),
  ],
});

logger.loginSuccess = (username) => logger.info(`Login successful for user: ${username}`);
logger.loginFailed = (username, reason) => logger.error(`Login failed for user: ${username} - Reason: ${reason}`);
logger.navigation = (url, status) => logger.info(`Navigated to ${url} - HTTP ${status}`);

export default logger;
