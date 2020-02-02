/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        //去重
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        if (nums[i] > 0) {
            return result;
        } else {
            let sum = 0 - nums[i];
            let left = i + 1, right = nums.length - 1;
            while (left < right) {
                if (nums[left] + nums[right] === sum) {
                    result.push([
                        nums[i],
                        nums[left],
                        nums[right]
                    ]);
                    //去重
                    while (left < nums.length && nums[left] === nums[left + 1]) {
                        left++;
                    }
                    left++;
                } else if (nums[left] + nums[right] > sum) {
                    right--;
                } else {
                    left++;
                }
            }
        }
    }
    return result;
};
// @lc code=end

