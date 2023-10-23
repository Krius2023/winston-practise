const devLogger = require("./dev.logger")
const qaLogger = require("./qa.logger")
const nodeEnv = process.env.NODE_ENV;

let logger;

if (nodeEnv === "dev") {
    logger = devLogger();
}

if (nodeEnv === "qa") {
    logger = qaLogger();
}

module.exports = logger;