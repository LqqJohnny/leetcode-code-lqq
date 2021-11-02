// https://leetcode-cn.com/problems/fizz-buzz/


/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    let result = Array(n);
    for (let i = 0; i < n; i++) {
        let str = ''
        if ((i + 1)/3 >= 1 && (i + 1)%3 === 0 ){
            str +='Fizz'
        }
        if ((i + 1)/5 >= 1 && (i + 1) % 5 === 0) {
            str += 'Buzz'
        }
        result[i] = str || i + 1 + '';
    }

    return result;
};

console.log(fizzBuzz(3));