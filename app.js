const logger = require('./logger/index')
const expressWinston = require('express-winston')
const express = require('express')
const app = express()

app.use("/", expressWinston.logger({
    winstonInstance: logger,
    statusLevels: true
}))

app.get('/info', (req, res) => {
    logger.info('I am info log from /info')
    res.sendStatus(200)
})

app.get('/400', (req, res) => {
    logger.warn('I am warn log from /400')
    res.sendStatus(400)
})

app.get('/500', (req, res) => {
    logger.error('I am error log from /500')
    res.sendStatus(500)
})

app.get('/err', (req, res) => {
    logger.error('I am error log from /err')
    throw new Error('I am a custom error')
})
app.listen(8001, () => console.log('Server is up!'))