// https://leetcode-cn.com/problems/merge-two-binary-trees/


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
    let count = 0;
    let cur = new TreeNode(count);

    if (!root1 && !root2){
        return null;
    }
    if(!root1){
        return root2;
    }else if(!root2){
        return root1;
    }else{
        count = root1.val + root2.val;
        cur.val = count;
        cur.left = mergeTrees(root1.left, root2.left);
        cur.right = mergeTrees(root1.right, root2.right);
    }

    return cur;
};