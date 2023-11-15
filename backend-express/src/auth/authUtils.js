'use strict'

const JWT = require('jsonwebtoken')
const { asyncHandler } = require('../helpers/asyncHandler')
const { AuthFailureError, NotFoundError } = require('../core/error.response')
const { findByUserId } = require('../services/key.service')

const HEADER = {
    API_KEY: 'x-api-key',
    CLIENT_ID: 'x-client-id',
    AUTHORIZATION: 'authorization'
}

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

const authentication = asyncHandler(async (req, res, next) => {
    /**
     * check if user id missing
     * get accessToken
     * verifyToken
     * check user in dbs
     * check keyStore with userId
     * if (!err) return next()
     */

    const userId = req.headers[HEADER.CLIENT_ID]
    if (!userId) throw new AuthFailureError('Invalid User ID')

    const keyStore = await findByUserId(userId)
    console.log(`
        userId: ${userId}
        keyStore: ${keyStore.publicKey}
    `)
    if (!keyStore) throw new NotFoundError('Key not found')

    const accessToken = req.headers[HEADER.AUTHORIZATION]
    if (!accessToken) throw new AuthFailureError('Access Token incorrect')

    try {
        const decodedUser = JWT.verify(accessToken, keyStore.publicKey)
        console.log('decoded User', decodedUser)

        if (userId !== decodedUser.userId) throw new AuthFailureError('Invalid user id')

        req.keyStore = keyStore
    } catch (err) { throw err}
})

module.exports = { createTokenPair, authentication }