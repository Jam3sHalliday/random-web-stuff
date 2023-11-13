'use strict'

const STATUS_CODES = {
    FORBIDDEN: 403,
    CONFLICT: 4091
}

const STATUS_MESSAGES = {
    FORBIDDEN: 'Bad Request Error',
    CONFLICT: 'Conflict Error'
}

class ErrorResponse extends Error {
    constructor (message, status) {
        super(message)

        this.status = status
    }
}

class ConflictRequestError extends ErrorResponse {
    constructor(message = STATUS_MESSAGES.FORBIDDEN, status = STATUS_CODES.FORBIDDEN) {
        super(message, status)
    }
}

class BadRequestError extends ErrorResponse {
    constructor(message = STATUS_MESSAGES.FORBIDDEN, status = STATUS_CODES.FORBIDDEN) {
        super(message, status)
    }
}

module.exports = {
    ConflictRequestError,
    BadRequestError
}
