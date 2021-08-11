// 349. 两个数组的交集

// 给定两个数组，编写一个函数来计算它们的交集。
// https://leetcode-cn.com/problems/intersection-of-two-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let ret = [];
    let map = {};
    for(let i = 0 ;i<nums1.length;i++){
        map[nums1[i]] = true;
    }
    for(let j = 0 ;j<nums2.length;j++){
        if(map[nums2[j]]){
            ret.push(nums2[j]);
            map[nums2[j]] = false;
        }
    }
    return ret;
};