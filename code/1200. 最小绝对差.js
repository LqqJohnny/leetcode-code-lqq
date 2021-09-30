// https://leetcode-cn.com/problems/minimum-absolute-difference/

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
// 需要返回的是 数值 ， 不需要 index ， 所以可以直接 对数组 先进行排序
// 然后对没两个相邻的数字 求差值， 并记录最小的差值 和对应的结果数组。
var minimumAbsDifference = function (arr) {
    arr.sort((a,b)=>a-b);

    let minDiff = Infinity;
    let numberList = [];
    for(let i = 1 ; i < arr.length ; i++){
        let diff = arr[i] - arr[i-1];
        if(diff < minDiff){
            minDiff = diff;
            numberList = [[arr[i-1] , arr[i]]]
        } else if (diff === minDiff){
            numberList.push([arr[i - 1], arr[i]]);
        }
    }

    return numberList;
};


let  arr = [1,2,3,4,5];

console.log(minimumAbsDifference(arr));