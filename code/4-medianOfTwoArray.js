/** 找出两个数组合并后的中位数
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var all = nums1.concat(nums2).sort(function(a,b){return a-b});
    var median  = 0;
    if(all.length%2==1){
         median = all[Math.floor(all.length/2)];
    }else{
         var index = all.length/2-1;
         median = (all[index]+all[index+1])/2
    }
    return median;
};
