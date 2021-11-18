// https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/

// 升序的数组 找两个 数字 和 = target 

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let min = numbers[0];
    let max = numbers[numbers.length - 1];
    let map = {};
    for(let i = 0; i < numbers.length ; i++){
        let val = numbers[i]
        if(map[val]!==undefined){
            return [map[val]+1, i+1];
        }

        let remain = target - val;// 要找的差值
        console.log(map, val, map[val], remain);
        if (remain < min){
            return [];
        }
        map[ remain ] = i;
    }

    return [];
};

let numbers = [5, 25, 75], target = 100

console.log(twoSum(numbers ,target));
