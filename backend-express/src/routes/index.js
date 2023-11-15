'use strict'

const express = require('express')
const accessRoute = require('./access')
const { apiKeyValidator, permissionValidator } = require('../auth/checkAuth')

const router = express.Router()

router.use(apiKeyValidator)
router.use('/v1/api', accessRoute)
router.use(permissionValidator('0000'))

module.exports = router
