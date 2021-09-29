// https://leetcode-cn.com/problems/add-to-array-form-of-integer/


/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
    let kArray = String(k).split('').map(val=>Number(val));
    let i = num.length-1;
    let j = kArray.length-1;
    let result = [];
    let addOne = 0;

    while(j>=0 || i>=0){
        let sum = (num[i] || 0) + (kArray[j] || 0) + addOne;
        if (sum >= 10) {
            addOne = 1;
            sum -= 10;
        } else{
            addOne = 0;
        }
        let index = Math.max(i , j)
        result[index] = sum;
        i--;
        j--;
    }
    if(addOne === 1){
        result.unshift(1);
    }

    return result;
};

console.log(addToArrayForm([0], 23));