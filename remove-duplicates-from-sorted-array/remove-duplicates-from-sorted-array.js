/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let r = 1
    for(let i=0; i < nums.length - 1; i++) {
        if (nums[i] !== nums[i+1]) {
            nums[r] = nums[i + 1]
            r++
        }
    }

    return r
};