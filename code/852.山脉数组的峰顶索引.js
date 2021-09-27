// https://leetcode-cn.com/problems/peak-index-in-a-mountain-array/


/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
    let left  = 0 ;
    let right = arr.length-1;

    while(left < right){
        if (arr[left] < arr[left+1]){
            left++;
        }
        if (arr[right] < arr[right - 1]) {
            right--;
        }
    }
    return left;
};
