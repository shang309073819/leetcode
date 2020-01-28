/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let n = nums.length;
    if (n === 1) return nums[0] === target ? 0 : -1;
    let search_binary = (left, right) => {
        if (1 === right - left) {
            return nums[left] === target ? left : (nums[right] === target ? right : -1)
        }
        let middle = Math.floor((left + right) / 2);
        if (target === nums[middle]) return middle;
        if (target > nums[middle]) left = middle;
        if (target < nums[middle]) right = middle;
        return search_binary(left, right);
    }
    return search_binary(0, n - 1);
};
// @lc code=end

//考虑边界问题
//right - left === 1 的问题
//lenght === 1 的问题
