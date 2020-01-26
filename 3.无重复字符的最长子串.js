/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let tmp = [];
    let i = 0, j = 0;
    let num = 0;
    while (j < s.length) {
        if (tmp.includes(s[j])) {
            i++;
            tmp.shift();
        } else {
            tmp.push(s[j]);
            j++
        }
        num = Math.max(num, tmp.length);
    }
    return num;
};
// @lc code=end

/**
 * 滑动窗口
 */