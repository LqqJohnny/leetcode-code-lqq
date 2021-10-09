// https://leetcode-cn.com/problems/combination-sum/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// 递归

var combinationSum = function (candidates, target) {
    let result = [];

    /**
     * 描述
     * @date 2021-10-09
     * @param {any} arr 存储结果的临时数组 ， 在rest ===0 的时候 ， 整个数组会被加入到 result 中
     * @param {any} rest 累减 剩下的数
     * @returns {any}
     */
    function findNumber(arr, rest) {
        // 当 rest =0时 ， 说明arr 中的和 已经等于 target 了, 则直接加入 result中
        if (rest === 0) {
            return result.push(arr);
        }
        // 遍历  candidates 数组中寻找小于等于 rest 的数字，来组成和数组。
        candidates.forEach((e) => { 
            if (e <= rest) { //  只有在当前值 小于 rest 时候， 才做下一步判断
                if (
                    arr.length === 0 ||
                    (arr.length && e >= arr[arr.length - 1])
                ) {
                    // 这里限制了，当前的数字 e 要大于/等于 临时数组arr中的最后一个数（最大值），也就是上一个加入arr的数
                    // 当前值一定要大于/等于 上一个数字
                    // 这样可以保证arr 数组中的数字是从小到大排序的，主要是为了去重 
                    // 类似于[2,2,3] [2,3,2]是一样的结果需要去重
                    findNumber([...arr, e], rest - e);
                }
            }
        });
    }

    findNumber([], target);

    return result;
};


let a = [2, 3, 6, 7], b = 7;
console.log(combinationSum(a,b));

