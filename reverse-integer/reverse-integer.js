/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const maxInt = Math.pow(2, 31) - 1;
    const minInt = -Math.pow(2, 31);
    
    let result = parseFloat(x.toString().split("").reverse().join(""))*Math.sign(x)

    if(result <= maxInt && result >= minInt) {
        return result
    } else {
        return 0
    }
};