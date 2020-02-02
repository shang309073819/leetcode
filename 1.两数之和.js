/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let m = new Map();
    for (let i = 0; i < nums.length; i++) {
        let sub = target - nums[i];
        if (m.has(sub)) {
            return [m.get(sub), i]
        }
        m.set(nums[i], i);
    }
};
// @lc code=end

