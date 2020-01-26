/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
    let i = 0, j = 0, sum = nums[0], num = 0;
    while (i < nums.length && j < nums.length) {
        if (sum < s) {
            j++;
            sum = sum + nums[j];
        } else {
            num = num > 0 ? Math.min(num, j - i + 1) : j - i + 1;
            sum = sum - nums[i];
            i++;
        }
    }
    return num;
};
// @lc code=end


/**
 * 滑动窗口, 定义左右指针
 */