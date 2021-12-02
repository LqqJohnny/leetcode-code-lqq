// https://leetcode-cn.com/problems/linked-list-cycle/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 快慢指针 如果是一个环， 那快指针 迟早会追上慢指针

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let fast = head;
    let slow = head;
    while(fast && slow && fast.next){
        fast = fast.next.next;
        slow = slow.next
        if(fast === slow){
            return true;
        }
    }

    return false;
};