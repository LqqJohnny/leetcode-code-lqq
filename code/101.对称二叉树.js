// https://leetcode-cn.com/problems/symmetric-tree/


/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}



// 广度优先算法 ， 把每一层的数字都取出来， 看是否是对称的  迭代法
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    let nums = [];
    treeToArray(root);
    return nums.every(val=>{
        return val.join('-') === val.reverse().join('-');
    })
    function treeToArray(node , index = 0){
        let val = node ? node.val : '_';
        if (nums[index] instanceof Array) {
            nums[index].push(val);
        } else {
            nums[index] = [val];
        }

        if(node){
            treeToArray(node.left , index+1);
            treeToArray(node.right, index + 1);
        }
    }
};


// 递归法 
var isSymmetric2 = function (root) {
    

}

