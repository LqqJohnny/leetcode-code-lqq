// 88. 合并两个有序数组
// https://leetcode-cn.com/problems/merge-sorted-array/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let len = n+m-1;
    n--;m--;
    while(m>=0 && n>=0){
        if(nums1[m] < nums2[n]){
            nums1[len] = nums2[n];
            n--;
        }else{
            nums1[len] = nums1[m];
            m--;
        }
        len--;
    }
    if(m === -1){
        for(let i =0 ; i<=n ;i++){
            nums1[i] = nums2[i];
        }
    }
};