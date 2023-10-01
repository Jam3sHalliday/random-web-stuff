'use strict'

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('mongodb has been connected'))
    .catch(err => console.error(err))

if (true) {
    mongoose.set('debug', true)
    mongoose.set('debug', { color: true })
}

module.exports = mongoose
