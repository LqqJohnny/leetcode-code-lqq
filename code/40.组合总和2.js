// https://leetcode-cn.com/problems/combination-sum/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// failed  : 怎么去重

var combinationSum = function (candidates, target) {
    let result = [];

    function findNumber(arr, rest, used) {
        if (rest === 0) {
            return result.push(arr);
        }

        candidates.forEach((val , i) => {
            if (val <= rest && used.indexOf(i) < 0) {
                if (
                    arr.length === 0 ||
                    (arr.length && val >= arr[arr.length - 1])
                ) {
                    findNumber([...arr, val], rest - val , [...used , i]);
                }
            }
        });
    }

    findNumber([], target,[]);

    return result;
};


let a = [10, 1, 2, 7, 6, 1, 5], b = 8
console.log(combinationSum(a, b));

