/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const last = digits.length - 1
    digits[last] += 1
    
    if(digits[last] === 10) {
        digits[last] = 0
        for(let i = last - 1; i >= 0; i--) {
            if(digits[i] !== 9) {
                digits[i] += 1
                return digits
            } else {
                digits[i] = 0
            }
        }
        digits.unshift(1)
    }
    return digits
};