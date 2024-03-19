/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(!s) {
        return false
    }
    
    let cleanString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    let reversed = cleanString.split('').reverse().join('')
    
    return cleanString === reversed
};