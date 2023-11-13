'use strict'

const STATUS_CODES = {
    OK: 200,
    CREATED: 201
}

const STATUS_EXPLAINS = {
    OK: 'Success',
    CREATED: 'Created'
}

class SuccessResponse {
    constructor({
        message,
        statusCode = STATUS_CODES.OK,
        metadata = {},
        statusExplain = STATUS_EXPLAINS.OK
    }) {
        this.message = message || statusExplain
        this.status = statusCode
        this.metadata = metadata
    }

    send(res, headers = {}) {
        return res.status(this.status).json(this)
    }
}

class OK extends SuccessResponse {
    constructor({ message, metadata }) {
        super({ message, metadata })
    }
}

class CREATED extends SuccessResponse {
    constructor({
        message,
        statusCode = STATUS_CODES.CREATED,
        metadata = {},
        statusExplain = STATUS_EXPLAINS.CREATED,
        options
    }) {
        super({ message, metadata, statusCode, statusExplain })
        this.options = options
    }
}

module.exports = {
    OK,
    CREATED,
    SuccessResponse
}