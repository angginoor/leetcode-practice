/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    
//     let n = nums.length

//     for(let i = 0; i < k; i++) {
//         nums.unshift(nums[n - 1])
//         nums.pop()
//     }

//     return nums
    
//     for(let rotation = 0; rotation < k; rotation++) {
//         let firstNum = nums[0]
        
//         for(let i = 0; i <= nums.length; i++) {
//             nums[i] = nums[i + 1]
//         }
        
//         nums[nums.length - 1] = firstNum
//     }
    
    const n = nums.length
    k = (k % n)
    
    let end = nums.splice(n - k)
    nums.splice(0, 0, ...end)
    
};