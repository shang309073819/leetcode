/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let n = s.length;
    let arr = Array.from(new Array(n), x => new Array(n));
    let left = 0, right = 0;
    for (let i = n - 2; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            arr[i][i] = true; //一个字符肯定是回文字符串
            if (j === i + 1 && s[i] === s[j]) {
                arr[i][j] = true;
            } else if (arr[i + 1][j - 1] && s[i] === s[j]) {
                arr[i][j] = true;
            } else {
                arr[i][j] = false;
            }
            if (arr[i][j] && j - i > right - left) {
                left = i;
                right = j;
            }
        }
    }
    return s.slice(left, right + 1);
};
// @lc code=end