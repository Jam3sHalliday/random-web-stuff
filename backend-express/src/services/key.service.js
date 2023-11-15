'use strict'

const keyModel = require('../models/keytoken.model')
const { Types: { ObjectId } } = require('mongoose')

class KeyService {
    static createKeyToken = async ({ userId, publicKey, privateKey, refreshToken }) => {
        try {
            // const tokens = await keyModel.create({
            //     userId: userId,
            //     publicKey,
            //     privateKey
            // })

            // return tokens ? tokens.publicKey : null
            const filter = { userId }
            const update = { publicKey, privateKey, usedRefreshTokens: [], refreshToken }
            const options = { upsert: true, new: true }

            const tokens = await keyModel.findOneAndUpdate(filter, update, options)

            return tokens?.publicKey || null
        } catch (err) {
            console.log('createKeyToken error::', err)
        }
    }

    static findByUserId = async (userId) => {
        return await keyModel.findOne({ userId: new ObjectId(userId) }).lean()
    }

    static removeKeyById = async (id) => await keyModel.findByIdAndRemove(id)
}

module.exports = KeyService
