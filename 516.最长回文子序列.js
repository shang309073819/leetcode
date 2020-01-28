/*
 * @lc app=leetcode.cn id=516 lang=javascript
 *
 * [516] 最长回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
    let n = s.length;
    if (n === 1) return 1;
    let arr = Array.from(new Array(n), x => new Array(n).fill(0));
    let max = 0;
    for (let i = n - 2; i >= 0; i--) {
        arr[i][i] = 1;
        for (let j = i + 1; j < n; j++) {
            if (j - i === 1) {
                arr[i][j] = (s[i] === s[j]) ? 2 : 1;
            } else if (s[i] === s[j]) {
                arr[i][j] = arr[i + 1][j - 1] + 2;
            } else {
                arr[i][j] = Math.max(arr[i + 1][j], arr[i][j - 1]);
            }
            max = Math.max(max, arr[i][j]);
        }
    }
    return max;Ï
};
// @lc code=end

