

// 类似于斐波那契数列，需要对已经判断了的数字做一个记录 降低时间

/**
 * @param {number} n
 * @return {number}
 */

// 此解法 无法通过， 会超时 但是可用

var nthUglyNumber = function (n) {
    let uglyNums = [1];
    let notUglyNums = [];
    let cur = 1;
    while(n > 0){
        if (isUglyNum(cur)){
            uglyNums.push(cur);
            n--;
        }else{
            notUglyNums.push(cur);
        }
        cur++;
    }

    function isUglyNum(num) {
        if (uglyNums.indexOf(num ) >= 0) {
            return true;
        }
        if (notUglyNums.indexOf(num)>=0){
            return false;
        }
        if (num % 5 === 0) {
            return isUglyNum(num / 5)
        }

        if (num % 3 === 0) {
            return isUglyNum(num / 3)
        }

        if (num % 2 === 0) {
            return isUglyNum(num / 2)
        }

        return false;
    }

    return uglyNums[uglyNums.length-1];
};


// 最优解 是使用三指针法 三个指针每次都各自加 2 ，3 ， 5 

console.log(nthUglyNumber(363));