/**
给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
示例:
输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
*/

/**
解题思路：动态规划
arr[i]以nums[i]结尾的序列最大值
nums[i]结尾有两种情况
arr[i-1] < 0， 这个时候取 nums[i]
arr[i-1] > 0, 这个时候取 arr[i-1] + nums[i]
最后要求的事数组arr中的最大值
 */
var maxSubArray = function (nums) {
    let n = nums.length;
    let arr = new Array(n);
    arr[0] = nums[0];
    for (let i = 1; i < n; i++) {
        arr[i] = Math.max(arr[i - 1] + nums[i], nums[i]);
    }
    return Math.max(...arr);
};


/**
 * 贪心算法：sum > 0, 继续贪心
 * sum < 0，重新开始计算
 */
var maxSubArray = function (nums) {
    let result = nums[0];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (sum > 0) {
            sum = sum + nums[i];
        } else {
            sum = nums[i];
        }
        result = Math.max(result, sum);
    }
    return result;
};