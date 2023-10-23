const winston = require('winston');
const { format, createLogger, transports } = winston;
const { timestamp, combine, json, prettyPrint, printf, colorize } = format;

const myFormat = printf(({ level, message, timestamp, meta }) => {
    return `${timestamp} [${level}]: ${message}, ${JSON.stringify(meta)}`;
});

const devLogger = () => {
    return createLogger({
        level: 'debug',
        format: combine(
            colorize(),
            timestamp(),
            prettyPrint(),
            json(),
            myFormat
        ),
        transports: [
            new transports.Console()
        ]
    });
}

module.exports = devLogger