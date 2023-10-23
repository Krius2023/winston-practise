const winston = require('winston');
const { format, createLogger, transports } = winston;
const { timestamp, combine, json } = format;

const qaLogger = () => {
    return createLogger({
        level: 'debug',
        format: combine(
            timestamp(),
            json()
        ),
        transports: [
            new transports.Console(),
            new transports.File({ filename: 'qa/error.logs', level: 'error' }),
            new transports.File({ filename: 'logs/qa.logs', level: 'info' }),
            new transports.File({ filename: 'qa/warn.logs', level: 'warn' })
        ]
    });
}

module.exports = qaLogger