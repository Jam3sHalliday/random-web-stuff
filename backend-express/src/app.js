const express = require('express')
const morgan = require('morgan')
const compression = require('compression')
const helmet = require('helmet')

const app = express()

// init middleware
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())

// init db

// init routes
app.get('/', (req, res, n) => res.json('hello '.repeat(100020)))

module.exports = app