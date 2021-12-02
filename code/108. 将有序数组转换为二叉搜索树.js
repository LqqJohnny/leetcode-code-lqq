// https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/



// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}



/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    if(nums.length===1){
        return new TreeNode(nums[0]);
    }
    if(nums.length===0){
        return null;
    }
    console.log(nums);
    let index = Math.floor(nums.length / 2);
    let center = nums[index];
    let root = new TreeNode(center);
    root.left = sortedArrayToBST(nums.slice(0, index));
    root.right = sortedArrayToBST(nums.slice(index+1))
    return root;
};

let nums = [-10, -3, 0, 5, 9]
console.log(sortedArrayToBST(nums));
// 输出：[0, -3, 9, -10, null, 5]
// 解释：[0, -10, 5, null, -3, null, 9] 也正确
