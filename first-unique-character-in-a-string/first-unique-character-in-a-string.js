/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // Create a frequency map to store the count of each character
    const freqMap = {};
    
    // Populate the frequency map
    for (let char of s) {
        freqMap[char] = (freqMap[char] || 0) + 1;
    }
    
    // Iterate through the string to find the first unique character
    for (let i = 0; i < s.length; i++) {
        if (freqMap[s[i]] === 1) {
            return i; // Return the index of the first unique character
        }
    }
    
    return -1;
}