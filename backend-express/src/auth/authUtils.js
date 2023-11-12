'use strict'

const JWT = require('jsonwebtoken')

const createTokenPair = async (payload, pbk, prk) => {
    try {
        const accessToken = await JWT.sign(payload, pbk, {
            expiresIn: '2 days'
        })

        const refreshToken = await JWT.sign(payload, prk, {
            expiresIn: '7 days'
        })

        JWT.verify(accessToken, pbk, (err, decode) => {
            if (err) console.error('verify error::', err)
            else {
                console.log('decode verify::', decode)
            }
        })

        return { accessToken, refreshToken }
    } catch (err) {
        return err
    }
}

module.exports = { createTokenPair }