const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')
const tripsRouter = require('./controllers/trips')

const app = express()

mongoose.set('strictQuery', false)

logger.info('Connecting to db')

mongoose.connect(config.MONGODBURL)
    .then(() => {
        logger.info('Connected to db')
    })
    .catch((error) => {
        logger.error('error connecting to db', error.message)
    })

app.use(cors())
app.use( express.static( 'dist' ) )
app.use( express.json() )
app.use( middleware.requestLogger )

app.use( '/api/trips', tripsRouter )

app.use( middleware.unknownEndpoint )
app.use( middleware.errorHandler )

module.exports = app