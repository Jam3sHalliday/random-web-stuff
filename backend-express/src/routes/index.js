'use strict'

const express = require('express')
const accessRoute = require('./access')
const { apiKeyValidator, permissionValidator } = require('../auth/checkAuth')

const router = express.Router()

router.use(apiKeyValidator)
router.use(permissionValidator('0000'))
router.use('/v1/api', accessRoute)

// router.get('/', (req, res, next) => {
//     return res.status(200).json({
//         message: 'router / get 200'
//     })
// })

module.exports = router
