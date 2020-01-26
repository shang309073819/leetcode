/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.

给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。

说明:

初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
示例:

输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]

归并排序的merge过程
 */
var merge = function (nums1, m, nums2, n) {
    let i = m + n - 1;
    let j = m - 1;
    let k = n - 1;
    while (j >= 0 && k >= 0) {
        if (nums1[j] >= nums2[k]) {
            nums1[i] = nums1[j];
            j--;
        } else {
            nums1[i] = nums2[k];
            k--;
        }
        i--;
    }
    while (j >= 0) {
        nums1[i] = nums1[j];
        j--;
        i--;
    }
    while (k >= 0) {
        nums1[i] = nums2[k];
        k--;
        i--;
    }
    return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))