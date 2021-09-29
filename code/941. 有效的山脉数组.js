// https://leetcode-cn.com/problems/valid-mountain-array/


/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
    if(arr.length<3){
        return false;
    }
    // 找到最大数字的 index 组边是递增 右边是递减
    let max = arr[0];
    let maxIndex = 0;
    arr.forEach((val,index)=>{
        if(val > max){
            max = val;
            maxIndex = index;
        }
    })
    // 如果最大值 在数组的边界 ， 那就不是山
    if (maxIndex === 0 || maxIndex === arr.length-1){
        return false;
    }

    for(let i = 1 ; i < maxIndex ;i++){
        if (arr[i] <= arr[i-1]){
            return false;
        }
    }

    for (let i = maxIndex + 1 ; i < arr.length; i++) {
        if (arr[i] >= arr[i - 1]) {
            return false;
        }
    }
    
    return true;
};
// [0,1,2,3,4,5,6,7,8,9]