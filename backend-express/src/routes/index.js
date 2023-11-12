'use strict'

const express = require('express')
const accessRoute = require('./access')

const router = express.Router()

router.use('/v1/api', accessRoute)

// router.get('/', (req, res, next) => {
//     return res.status(200).json({
//         message: 'router / get 200'
//     })
// })

module.exports = router
