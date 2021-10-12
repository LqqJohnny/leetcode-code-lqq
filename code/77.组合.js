// https://leetcode-cn.com/problems/combinations/



// 结果需要去重
// 递归 ，将 k个数的结果 转换成 k-1 个数
// 去重 ， 就在过程中保证 数组中数字递增 就可以保证不会重复。
/**
 * @param {number} n  [1 , n] 
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let result = [];
    if(k === 1){
        let arr = [];
        for (let i = 1; i <= n; i++) {
            arr.push([i]);
        }
        return arr;
    }
    for (let i = n; i >= 1; i--) {
        let temp = combine(i-1 , k-1);
        temp.forEach(val=>{
            result.push([...val , i]);
        })
    }

    return result;
};

// console.log(combine(4,2));
