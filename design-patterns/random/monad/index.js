// For chaining purpose without checking if every time to ensure data is valid

class Monad {
    constructor(value) {
        this.value = value
    }

    bind = function (func) {
        console.log({ value, this: this })
        if (!this.value) return this

        value = func(this.value)
        return Monad(func)
    }
}

const resPromise = Promise.resolve(123)
// const rejPromise = Promise.reject(null)

const monad = Monad
    .bind(resPromise.then(res => res))

console.log({ monad })
