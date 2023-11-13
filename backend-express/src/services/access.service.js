'use strict'

const { createTokenPair } = require('../auth/authUtils')
const { BadRequestError } = require('../core/error.response')
const shopModel = require('../models/shop.model')
const { getMinData } = require('../utils')
const KeyService = require('./key.service')

const bcrypt = require('bcrypt')
const crypto = require('node:crypto')

const SHOP_ROLES = {
    SHOP: 'SHOP',
    WRITER: 'WRITER',
    EDITOR: 'EDITOR',
    ADMIN: 'ADMIN',
}

class AccessService {
    static signUp = async ({ name, email, password }) => {
        try {
            // lean make queries faster, return js obj instead of Mongoose document.
            const shopHolder = await shopModel.findOne({ email }).lean()

            if (shopHolder) throw new BadRequestError('Shop already existed')
            const hashedPwd = await bcrypt.hash(password, 10)

            const newShop = await shopModel.create({
                name, email,
                password: hashedPwd,
                roles: [SHOP_ROLES.SHOP]
            })

            if (newShop) {
                // const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
                //     modulusLength: 4096,
                //     publicKeyEncoding: {
                //         type: 'pkcs1',
                //         format: 'pem'
                //     },
                //     privateKeyEncoding: {
                //         type: 'pkcs1',
                //         format: 'pem'
                //     }
                // })

                const privateKey = crypto.getRandomValues(new Uint32Array(1)).toString('hex')
                const publicKey = crypto.getRandomValues(new Uint32Array(1)).toString('hex')

                const keys = await KeyService.createKeyToken({
                    publicKey,
                    userId: newShop._id,
                    privateKey
                })

                if (!keys) throw new BadRequestError('Keys creation error', 500)

                // create token pair
                const tokens = await createTokenPair({
                    userId: newShop._id,
                    email
                }, publicKey, privateKey)

                const response = {
                    code: 201,
                    metadata: {
                        shop: getMinData(newShop, ['_id', 'name', 'email']),
                        tokens
                    }
                }

                return response
            }

            return {
                code: 500,
                metadata: null
            }
        } catch (err) {
            throw new BadRequestError(err)
        }
    }
}

module.exports = AccessService
