// https://leetcode-cn.com/problems/find-n-unique-integers-sum-up-to-zero/


/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
    let  result = [];
    for(let i = 1 ;i < Math.ceil((n+1)/2) ; i++){
        result.push(i);
        result.push(-i);
    }
    if(n%2 === 1){
        result.push(0);
    }

    return result;
};

// console.log(sumZero(4));