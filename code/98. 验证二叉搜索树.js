// https://leetcode-cn.com/problems/validate-binary-search-tree/

// 验证是否是有效的 搜索二叉树 ，即 所有节点的 左节点 的值比当前节点小， 右节点的值 比当前节点大

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root, min = -Infinity , max = Infinity) {
    if(!root){
        return true;
    }
    if(root.val >= max || root.val <= min){
        return false;
    }

    return isValidBST(root.left , min , root.val) &&
            isValidBST(root.right, root.val , max);
};
//  2
// 1 3

// [5, 4, 6, null, null, 3, 7]
//          5
//      4       6
//   3     5   3      7
