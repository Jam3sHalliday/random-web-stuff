require("dotenv").config()

const express = require('express')
const morgan = require('morgan')
const compression = require('compression')
const helmet = require('helmet')
const bp = require('body-parser')
// const { countConnected, checkOverload } = require('./helpers/check.connect')

require('./dbs/init.mongodb')
const app = express()

// init middleware
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())
// app.use(bp())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const router = require("./routes")
// init db

// init routes
app.use('/', router)

module.exports = app