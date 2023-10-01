const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const compression = require('compression')

const app = express()

const PORT = 3000

// MIDDLEWARE
app.use(morgan('dev')) // support development environment
app.use(helmet()) // hiding the technologies behind
app.use(compression()) // compress the response to save bandwidth

app.listen(PORT, (err) => console.error(err))

app.get('/', (req, res, next) => {
    const str = 'lorem ipsum ces dolor'
    
    return res.status(200).json({
        message: 'Lorem Ipsum',
        metadata: str.repeat(10000)
    })
})

module.exports = app
