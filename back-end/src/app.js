const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const compression = require('compression')

const app = express()

require('dotenv').config()
require('./dbs/init.mongodb')

const { checkOverload } = require('./helpers/check.connection')

// MIDDLEWARE
app.use(morgan('dev')) // support development environment
app.use(helmet()) // hiding the technologies behind
app.use(compression()) // compress the response to save bandwidth
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use('/', require('./routes'))

module.exports = app
