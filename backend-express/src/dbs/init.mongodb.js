'use strict'

const mongoose = require('mongoose')

class Database {
    constructor() {
        this.connect()
    }

    connect(type = 'mongodb') {
        mongoose.connect(process.env.MONGO_STR, {
            maxPoolSize: 39
        })

        if (true) {
            mongoose.set('debug', true)
            mongoose.set('debug', { color: true })
        }
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database()
        }

        return Database.instance
    }
}

const mongoInstance =  Database.getInstance()

module.exports = mongoInstance
