/**
 * Essential parts
 * - base case - when it stop
 * - different input every time function is call
 */

function countDown (num) {
    if (num === 1) {
        console.log('Equal to 1')
        return num
    }

    console.log(countDown(num - 1))
}

// countDown(10)

function sumRange(num) {
    if (num === 1) return num
    
    return num + sumRange(num - 1)
}

console.log(sumRange(4))