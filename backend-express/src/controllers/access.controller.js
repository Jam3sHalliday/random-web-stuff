'use strict'

const AccessService = require("../services/access.service")

class AccessController {
    signUp = async (req, res, next) => {
        try {
            console.log('[P]::signUp', req.body)

            const d = await AccessService.signUp(req.body)
            return res.status(200).json(d)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = new AccessController()
