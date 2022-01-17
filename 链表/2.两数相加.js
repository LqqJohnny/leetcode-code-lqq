/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let add = 0;
    let result = new ListNode(0);
    let cur = result;
    while(l1 || l2){
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0; 
        let sum = val1 + val2 + add;
        if(sum >= 10){
            add = 1;
            sum -= 10;
        }else{
            add = 0;
        }
        cur.next = new ListNode(sum);
        cur = cur.next;
        l1 = l1 ? l1.next : l1;
        l2 = l2 ? l2.next : l2;
    }
    if(add){
        cur.next = new ListNode(1);
    }
    return result.next;
};
// @lc code=end

