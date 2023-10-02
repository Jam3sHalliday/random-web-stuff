'use strict'

const bcrypt = require('bcrypt')
const crypto = require('crypto')
const shopModel = require("../models/shop.model")
const KeyTokenService = require('./keyToken.service')
const { createTokenPair } = require('../auth/authUtils')

const ShopRoles = {
    SHOP: 'SHOP',
    WRITER: 'WRITER',
    EDITOR: 'EDITOR',
    ADMIN: 'ADMIN'
}

class AccessService {

    static signUp = async ({ name, email, password }) => {
        console.log('--------')
        // try {
            const shop = await shopModel.findOne({ email }).lean()

            if (shop) {
                return {
                    code: '___',
                    message: 'Shop already exist'
                }
            }

            const hashedPw = await bcrypt.hash(password, 10)

            const newShop = await shopModel.create({
                name,
                email,
                password: hashedPw,
                roles: [ShopRoles.SHOP]
            })

            if (newShop) {
                // create privateKey, publicKey
                const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
                    modulusLength: 4096,
                    publicKeyEncoding: {
                        type: 'pkcs1',
                        format: 'pem'
                    },
                    privateKeyEncoding: {
                        type: 'pkcs1',
                        format: 'pem'
                    }
                })

                const publicKeyStr = await KeyTokenService.createKeyToken({
                    userId: newShop._id,
                    publicKey
                })

                if (!publicKeyStr) {
                    return {
                        code: 'xxx',
                        message: 'publicKeyString error'
                    }
                }

                const publicKeyObject = crypto.createPublicKey(publicKeyStr)

                const tokens = await createTokenPair({
                    userId: newShop._id,
                }, publicKeyObject, privateKey)

                console.log(`Token created:: ${tokens}`)

                return {
                    code: 201,
                    metadata: {
                        shop: newShop,
                        tokens
                    }
                }

            }

            return {
                code: 200,
                metadata: null
            }
        // } catch (err) {
        //     return {
        //         code: 'xxx',
        //         message: err.message,
        //         status: 'error'
        //     }
        // }
    }
}

module.exports = AccessService