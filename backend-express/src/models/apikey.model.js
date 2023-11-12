'use strict'

const { model, Schema, Types } = require('mongoose')

const DOC_NAME = 'ApiKey'
const COLLECTION_NAME = 'ApiKeys'

const apiKeySchema = new Schema({
    key: {
        type: String,
        require: true,
        unique: true
    },
    status: {
        type: Boolean,
        default: true
    },
    permissions: {
        type: [String],
        require: true,
        enum: ['0000', '1111', '2222']
    }
}, {
    timestamp: true,
    collection: COLLECTION_NAME
})

module.exports = model(DOC_NAME, apiKeySchema)
