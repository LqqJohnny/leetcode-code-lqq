// https://leetcode-cn.com/problems/power-of-three/

// 注意可能是 小于1 的数 1/9

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    if (n < 0) {
        return false;
    }
    if(n === 1){
        return true;
    }
    if(n < 1){
        return isPowerOfThree(1/n);
    }
    if(n%3 !== 0){
        return false;
    }

    return isPowerOfThree(n/3);
};

console.log(isPowerOfThree(27));