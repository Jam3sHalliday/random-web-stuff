'use strict'

const mongoose = require('mongoose')
const { countConnection } = require('../helpers/check.connection')

const connectionString = process.env.MONGODB_URL

class Database {
    
    constructor() {
        this.connect()
    }

    connect(type = 'mongodb') {
        if (true) {
            mongoose.set('debug', true)
            mongoose.set('debug', { color: true })
        }
        
        mongoose.connect(connectionString, { maxPoolSize: 50 })
            .then(() => console.log('mongodb has been connected, current connect: ', countConnection()))
            .catch(err => console.error(err))
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database()
        }

        return Database.instance
    }
}

const mongodbInstance = Database.getInstance()

module.exports = mongodbInstance
