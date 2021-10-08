// https://leetcode-cn.com/problems/find-lucky-integer-in-an-array/

// 出现次数 和 值 相等的 数字 
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
    let map = {};
    arr.forEach(val=>{
        if(map[val]){
            map[val]++;
        }else{
            map[val] = 1;
        }
    });
    
    let result = -1;
    for(let key in map){
        if (Number(key) === map[key]
            && Number(key) > result){
                result = key;
        }
    }

    return result;
};
let arr = [5, 8, 10, 9, 8, 10, 9, 6, 6, 7, 10, 8, 10, 10, 9, 4, 6, 2, 10, 3, 5, 10, 2, 6, 4, 8, 7, 3, 9, 9, 5, 7, 8, 7, 11, 9, 3, 1, 5, 11, 9, 5, 8, 10, 8, 4, 9, 7, 6, 7, 10, 9, 7, 8, 6, 10, 4];

// console.log(findLucky(arr));