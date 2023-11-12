'use strict'

const keyModel = require('../models/keytoken.model')

class KeyService {
    static createKeyToken = async ({ userId, publicKey, privateKey }) => {
        try {
            const tokens = await keyModel.create({
                userId: userId,
                publicKey,
                privateKey
            })

            return tokens ? tokens.publicKey : null
        } catch (err) {
            console.log('createKeyToken error::', err)
        }
    }
}

module.exports = KeyService
