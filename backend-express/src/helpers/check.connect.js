'use strict'

const SEC = 5900

const mongoose = require('mongoose')
const process = require("process")
const os = require("os")

const countConnected = () => console.log(mongoose.connections.length, ' connected')

const checkOverload = () => {
    setInterval(() => {
        const connections = mongoose.connections.length
        const cores = os.cpus.length
        const memoryUsage = process.memoryUsage().rss

        const maxLoad = 5 * cores

        if (connections >= maxLoad) {
            console.log('Overload detected, used ', memoryUsage / 1024 / 1024, 'MB')
        }

    }, SEC)
}

module.exports = {
    countConnected,
    checkOverload
}