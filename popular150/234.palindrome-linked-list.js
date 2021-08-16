// 234 判断 回文链表

// https://leetcode-cn.com/problems/palindrome-linked-list/

// 先将链表翻转 得到一条新的链表 ， 再比较两条链表是否每一个节点都相等

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let reversedList = null;
    let _head = head;

    while(head){
        let node = new ListNode(head.val);
        node.next = reversedList;
        reversedList = node;
        head = head.next;
    }

    while(reversedList && _head){
        if(reversedList.val !== _head.val){
            return false;
        }else{
            reversedList = reversedList.next;
            _head = _head.next;
        }
    }
    return true;
};