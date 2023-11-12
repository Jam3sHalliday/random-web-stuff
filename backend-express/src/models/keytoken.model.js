'use strict'

const { Schema, Types, model } = require('mongoose')

const MODEL_NAME = 'Key'
const COLLECTION_NAME = 'Keys'

const keyModel = new Schema({
    userId: {
        type: Types.ObjectId,
        require: true,
        ref: 'Shop'
    },
    publicKey: {
        type: String,
        require: true
    },
    privateKey: {
        type: String,
        require: true
    },
    refreshToken: {
        type: Array,
        default: []
    }
}, {
    collection: COLLECTION_NAME,
    timestamps: true
})

module.exports = model(MODEL_NAME, keyModel)