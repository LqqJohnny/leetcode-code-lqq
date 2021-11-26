// https://leetcode-cn.com/problems/search-in-a-binary-search-tree/

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
    console.log(root.val);
    if (root.val === val){
        return root;
    }
    if (root.left){
        let leftRoot = searchBST(root.left, val);
        if (leftRoot){
            return leftRoot;
        }
    }
    if (root.right) {
        let rightRoot = searchBST(root.right, val);
        if (rightRoot) {
            return rightRoot;
        }
    }
    return null;
};