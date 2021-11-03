// https://leetcode-cn.com/problems/binary-tree-paths/


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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    let result = [];
    let cur_text = root.val;

    let leftArr = []
    let rightArr = []
    if (root.left) {
        leftArr = binaryTreePaths(root.left);
    }

    if (root.right) {
        rightArr = binaryTreePaths(root.right);
    }

    if (leftArr.length + rightArr.length === 0) {
        result.push(root.val + '');
    } else {
        [...leftArr, ...rightArr].forEach(val => {
            result.push(root.val + '->' + val);
        })
    }

    return result;
};