// https://leetcode-cn.com/problems/check-if-n-and-its-double-exist/


/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i] * 2] || map[arr[i]/2]){
            return true;
        }else{
            map[arr[i]] = true;
        }
    }
    return false;
};

let arr = [1, 2, 3, 42, 5]
console.log(checkIfExist(arr));
