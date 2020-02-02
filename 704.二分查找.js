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
    let search_binary = (left, right) => {
        if(left > right) return -1;
        let middle = Math.floor((left + right) / 2);
        if (nums[middle] === target) return middle;
        if (nums[middle] < target) return search_binary(middle + 1, right);
        if (nums[middle] > target) return search_binary(left, middle - 1);
    }
    return search_binary(0, n - 1);
};
// @lc code=end

//考虑边界问题
//right - left === 1 的问题
//lenght === 1 的问题
