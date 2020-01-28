/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let head = p = new ListNode(-1);
    let carry = 0;
    while (l1 && l2) {
        let sum = l1.val + l2.val + carry;
        p.next = new ListNode(sum % 10);
        carry = sum >= 10 ? 1 : 0;
        p = p.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    while (l1) {
        let sum = l1.val + carry;
        p.next = new ListNode(sum % 10);
        carry = sum >= 10 ? 1 : 0;
        p = p.next;
        l1 = l1.next;
    }
    while (l2) {
        let sum = l2.val + carry;
        p.next = new ListNode(sum % 10);
        carry = sum >= 10 ? 1 : 0;
        p = p.next;
        l2 = l2.next;
    }
    if (carry !== 0) {
        p.next = new ListNode(carry);
    }
    return head.next;
};
// @lc code=end

