/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 *  输入: [0,1,0,3,12]
    输出: [1,3,12,0,0]
    双指针交换元素
 */
var moveZeroes = function (nums) {
    let j = 0;
    let tmp;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            tmp = nums[i];
            nums[i] = nums[j];
            nums[j] = tmp;
            j++
        }
    }
    return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));