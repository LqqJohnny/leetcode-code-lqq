
// 144. 二叉树的前序遍历
// https://leetcode-cn.com/problems/binary-tree-preorder-traversal/

// ======历史提交可进入上面链接提交记录查看======

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


/** 递归方法
 * 不管树 多大 ， 从根节点出发 
 * 分为 根节点 ， 左树 ， 右树 ， 结果就是 [根节点val, ...左树结果数组 , ...右树结果数组]；
 * 计算左右 结果数组  可以用递归 。
 * 
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if(!root){
        return [];
    }
    return [val , ...preorderTraversal(root.left) , ...preorderTraversal(root.right)]
};


/** 迭代方法
 * 
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let stack = []; // 数组 模拟 栈 
    let res = [];
    while(root || stack.length>0){
    //    把当前循环的 节点的 左节点全部取出
        while(root){
           stack.push(root);
           res.push(root.val);
           root = root.left;
        }
        root = stack.pop().right;
    }
    return res;
};