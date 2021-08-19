// 101. 对称二叉树
// https://leetcode-cn.com/problems/symmetric-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 使用递归的方法 

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if(!root){
        return false;
    }else{
        return isSameNode(root.left , root.right);
    }
    
};

function isSameNode(left, right){
    if (left === null && right === null){
        return true;
    } else if (left === null || right === null){
        return false;
    }else{
        return left.val === right.val 
                && isSameNode(left.left , right.right)
                && isSameNode(left.right, right.left);
    }
}