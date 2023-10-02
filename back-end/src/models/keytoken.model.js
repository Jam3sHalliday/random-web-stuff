'use strict'

const mongoose = require('mongoose');

const DOCUMENT_NAME = 'Key'
const COLLECTION_NAME = 'Keys'

const keyTokenSchema = new mongoose.Schema({
    user:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    publicKey:{
        type:String,
        require: true
    },
    refreshToken:{
        type: Array,
        default: []
    },
}, {
    collection: COLLECTION_NAME,
    timestamps: true
});

//Export the model
module.exports = mongoose.model(DOCUMENT_NAME, keyTokenSchema);
