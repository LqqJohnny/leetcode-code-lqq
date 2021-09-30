// https://leetcode-cn.com/problems/rank-transform-of-an-array/


/**
 * @param {number[]} arr
 * @return {number[]}
 */
// 将数组中的 值 替换成 数组升序排序后 数字对应的序号。

var arrayRankTransform = function (arr) {
    // 先对数组进行排序
    let sortArr = arr.slice().sort((a,b)=>a-b); // 这个数组中 就能用indexOf 拿到 数字的顺序了
    // 还需要去重 
    sortArr = [...new Set(sortArr)];
    return arr.map(val=>{
        return sortArr.indexOf(val)+1;
    })
};

let arr = [37, 12, 28, 9, 100, 56, 80, 5, 12];
// console.log(arrayRankTransform(arr));
