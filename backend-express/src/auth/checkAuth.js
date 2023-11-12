'use strict'

const { findById } = require("../services/apikey.service")

const HEADER = {
    API_KEY: 'x-api-key',
    AUTHORIZATION: 'authorization'
}

const apiKeyValidator = async (req, res, n) => {
    try {
        const key = req.headers[HEADER.API_KEY]

        if (!key) return res.status(403).json({ message: 'Missing API key' })

        const objKey = await findById(key)
        if (!key) return res.status(403).json({ message: 'Missing API key' })

        req.objKey = objKey

        return n()
    } catch (err) {
        console.log(err)
    }
}

const permissionValidator = (permission) => (req, res, n) => {
    if (!req.objKey.permissions) {
        return res.status(403).json({
            message: 'Permission denied'
        })
    }

    console.log('permissions::', req.objKey.permissions)
    const isValid = !!req.objKey?.permissions?.includes(permission)
    
    if (!isValid) return res.status(403).json({ message: 'Permission denied' })
    return n()
}

module.exports = { apiKeyValidator, permissionValidator }