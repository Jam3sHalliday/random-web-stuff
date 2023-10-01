'use strict'

const m = require('mongoose')
const os = require('os')
const process = require('process')

const SECOND = 5000

const countConnection = () => {
    const connections = m.connections.length

    console.log(`Number of connections:: ${connections}`)
    return connections
}

const checkOverload = () => {
    setInterval(() => {
        const conns = m.connections.length
        const cores = os.cpus().length
        const memoryUsage = process.memoryUsage().rss

        // example maximum number of connections based on number of connect 
        const maxConnections = cores * 5
        console.log(`Active connections: ${conns}`)
        console.log(`Memory Usage:: ${memoryUsage / 1024 / 1024} MB`)

        if (conns > maxConnections) console.log('connection overload!')

    }, SECOND) // monitor every 5 seconds
}

module.exports = {
    countConnection,
    checkOverload
}
