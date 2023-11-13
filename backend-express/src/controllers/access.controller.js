'use strict'

const { BadRequestError } = require("../core/error.response")
const { CREATED, SuccessResponse } = require("../core/success.response")
const AccessService = require("../services/access.service")

class AccessController {
    login = async (req, res, next) => {
        try {
            return new SuccessResponse({
                metadata: await AccessService.logIn(req.body),
            }).send(res)
        } catch (err) {
            console.log(err, '-------')
            return res.status(err.status).json(err.message)
        }
    }
    
    signUp = async (req, res, next) => {
        try {
            return new CREATED({
                message: "Register Success",
                metadata: await AccessService.signUp(req.body),
            }).send(res)
        } catch (err) {
            return res.status(err.status).json(err.message)
        }
    }
}

module.exports = new AccessController()
