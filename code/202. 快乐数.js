// https://leetcode-cn.com/problems/happy-number/

/**
 * @param {number} n
 * @return {boolean}
 */

var isHappy = function (n, used=[]) {
    let arr = String(n).split('');
    let count = 0;
    arr.forEach((val)=>{
        count += Math.pow(Number(val) , 2);
    })

    if (count === 1){
        return true;
    }
    if (used.indexOf(count)>=0){
        return false;
    }
    used.push(count);
    return isHappy(count, used);
};

console.log(isHappy('19'));