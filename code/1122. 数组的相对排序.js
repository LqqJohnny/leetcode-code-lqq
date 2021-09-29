// https://leetcode-cn.com/problems/relative-sort-array/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    let map = {};
    arr2.forEach((val, index)=>{
        map[val] = index;
    })

    return arr1.sort((a , b)=>{
        if(map[a] !== undefined){
            if (map[b] !== undefined){
                return map[a] - map[b];
            }else{
                return -1;
            }
        }else{
            if (map[b] !== undefined) {
                return 1;
            } else {
                return a-b;
            }
        }
    })

};

let  arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], arr2 = [2, 1, 4, 3, 9, 6];
// console.log(relativeSortArray(arr1, arr2));