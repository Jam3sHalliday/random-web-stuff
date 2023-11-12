'use strict'

const { pick } = require('lodash')

const getMinData = (object = {}, fields = []) => pick(object, fields)

module.exports = { getMinData }