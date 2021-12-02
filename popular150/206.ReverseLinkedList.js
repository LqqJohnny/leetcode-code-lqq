// 206.反转链表
// https://leetcode-cn.com/problems/reverse-linked-list/

// 将链表的顺序 反转 

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}



/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {

    let result = null

    while(head){
        let node = new ListNode(head.val);
        node.next = result;
        result = node;
        head = head.next;
    }
    return result;
};