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


// 合并两个有序的数组
// 最简单的思路 就是 取两个数组的第一个数字，比较大小 ， 把小的放进结果数组，对应的数组取下一个数字， 继续比较
// 但是这里是要在原数组上改变值， 而且num1 后面有n个0 作为占位数字，所以需要从后面开始遍历， 而不是头部
function  merge2(nums1 , m, nums2, n){
    // 从尾部index 开始
    if(n===0){
        return;
    }
    let i = m-1;
    let j = n-1;
    let cur = m+n-1;
    while (cur>=0){
        if(j < 0 || nums1[i] >= nums2[j]){
            console.log('nums1[i]更大，取', nums1[i]);
            nums1[cur] = nums1[i];
            i--;
        }else{
            console.log('nums2[j]更大，取', nums2[j]);
            nums1[cur] = nums2[j];
            j--;
        }
        cur--;
    }

    return nums1;
}

console.log(merge2([1], 1, [2] , 1));
