/** Description for function foo */
function foo() {
    return 'bar'
}


// Feel like @param only worked for params in functions, not params in constructor or maybe I was wrong somewhere

/**
 * class Foo description
 * @Jam3sHalliday
 * @constructor this is description for Foo constructor
 * @param {boolean} isEveryoneInUgandaKnowsKungFoo - is everyone in Uganda knows KungFoo?
 */
class Foo {
    constructor(isEveryoneInUgandaKnowsKungFoo) {
        this.isKnowKungFoo = isEveryoneInUgandaKnowsKungFoo
    }

    /**
     * Function checking if everyone in Uganda knows Kungfoo
     * @param { boolean } wut - just pass a params for no reason 
     * @returns { string }
     */
    thisIsKungFooFighting(wut) {
        if (this.isKnowKungFoo) return 'everyone in Uganda knows kungfoo'
        return 'this is supa kicker'
    }

    /**
     * A static function
     * @param { string } greeting - Greeting Uganda people by some other languages
     */
    static ugandaPeople(greeting = 'Gyebale!') {
        return greeting
    }
}

const kung = new Foo()
const uganda = kung.thisIsKungFooFighting(true)

console.log(uganda)

// @callback

function UgandaGuy() {

}

/**
 * This Uganda guy knows kungfoo!!
 * @param {UgandaGuy~kungFooCallback} callback - The callback passes in for no reason
 */
UgandaGuy.prototype.kick = function (callback) {
    return 'Supa kicka'
}

