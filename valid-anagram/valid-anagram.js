/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let n1 = s.length
    let n2 = t.length
    
    if(n1 !== n2) {
        return false
    }
    
    let sSorted = s.split('').sort().join('')
    let tSorted = t.split('').sort().join('')
    
    for(let i = 0; i < n1; i++) {
        if(sSorted[i] !== tSorted[i]) {
            return false
        }
    }
    
    
    return true
    
};