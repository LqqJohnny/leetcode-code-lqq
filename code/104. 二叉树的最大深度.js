// https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/



// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) {
        return 0;
    }

    let leftMax = 0;
    let rightMax = 0;
    if(root.left){
        leftMax = maxDepth(root.left);
    }
    if (root.right) {
        rightMax = maxDepth(root.right);
    }
    return 1 + Math.max(leftMax, rightMax);
};