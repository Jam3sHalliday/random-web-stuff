'use strict'

const mongoose = require('mongoose')
console.log(process.env.MONGO_STR)
mongoose.connect(process.env.MONGO_STR)
    .then(console.log)

if (true) {
    mongoose.set('debug', true)
    mongoose.set('debug', { color: true })
}

module.exports = mongoose
