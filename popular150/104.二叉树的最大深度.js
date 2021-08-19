// 104. 二叉树的最大深度
// https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/

// 递归

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) {
        return 0;
    }
    if (!root.left && !root.right) {
        return 1;
    }

    return Math.max(maxDepth(root.right) + 1, maxDepth(root.left) + 1);
};