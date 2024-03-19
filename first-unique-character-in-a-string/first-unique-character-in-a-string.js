/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const fnc = {}
    
    for (let char of s) {
        fnc[char] = (fnc[char] || 0) + 1
    }
    
    for(let i = 0; i < s.length; i++) {
        if(fnc[s[i]] === 1) {
            return i
        }
    }
    
    return -1
};