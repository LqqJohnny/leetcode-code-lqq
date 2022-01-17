/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let stack = [];
    let cur = head;
    let result = new ListNode(0);
    let resultCur = result;
    while(cur){
        if (stack.length === 1) {
            let prev = stack.pop();
            resultCur.next = cur;
            cur = cur.next;
            resultCur.next.next = prev;
            resultCur = resultCur.next.next;
        } else {
            stack.push(cur);
            cur = cur.next;
        }
    }
    console.log(result);
    if(stack.lenth>0){
        resultCur.next = stack.pop();
    }
    return result.next;
};
// @lc code=end

