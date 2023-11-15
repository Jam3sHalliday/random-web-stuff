'use strict'

const accessController = require('../../controllers/access.controller')

const express = require('express')
const { asyncHandler } = require('../../helpers/asyncHandler')
const { authentication } = require('../../auth/authUtils')
const router = express.Router()

router.post('/shop/login', asyncHandler(accessController.login))
router.post('/shop/signup', asyncHandler(accessController.signUp))


// authentication
router.use(authentication)
router.post('/shop/signout', asyncHandler(accessController.signout))

module.exports = router