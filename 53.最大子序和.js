/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let n = nums.length;
    let arr = new Array(n);
    arr[0] = nums[0];
    for (let i = 1; i < n; i++) {
        arr[i] = Math.max(nums[i], arr[i - 1] + nums[i])
    }
    return Math.max(...arr);
};
// @lc code=end

