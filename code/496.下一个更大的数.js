// https://leetcode-cn.com/problems/next-greater-element-i/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 
 * ex: nums1 = [4,1,2], nums2 = [1,3,4,2].
 */
// 暴力解法  O(n^2)
var nextGreaterElement = function (nums1, nums2) {
    let result = [];
    nums1.forEach((val)=>{
        let cur = -1;
        let sameIndex = -1;
        for(let i = 0; i < nums2.length; i++){
            if (sameIndex<0){
                if (nums2[i] === val) {
                    sameIndex = i;
                }
            }else{
                if (nums2[i] > val) {
                    cur = nums2[i];
                    break;
                }
            }
        }
        result.push(cur);
    })
    return result;
};