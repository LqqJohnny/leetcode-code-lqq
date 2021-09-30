// https://leetcode-cn.com/problems/replace-elements-with-greatest-element-on-right-side/

/**
 * @param {number[]} arr
 * @return {number[]}
 */

// 其实就是 选择排序 ,区别就是 找到最大值之后不用交换位置，是直接替换， 然后将最后一个数字 变成 -1 
var replaceElements = function (arr) {
    for(let i = 0 ;i<arr.length;i++){
        let maxVal = 0;
        let maxIndex = 0;
        // 一遍循环 找到 右边 最大的数
        for(let j = i+1; j<arr.length;j++){
            if (arr[j] > maxVal){
                maxVal = arr[j];
                maxIndex = j;
            }
        }
        // 替换值
        arr[i] = maxVal;
    }
    arr[arr.length-1] = -1;
    return arr;
};

let arr = [17, 18, 5, 4, 6, 1];
console.log(replaceElements(arr));