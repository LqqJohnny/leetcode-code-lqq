/**
 *  12. 整数转罗马数字
 * 
 * https://leetcode-cn.com/problems/integer-to-roman/
 * 
 * 
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let map = [
        { value: 1000, text: 'M' },
        { value: 900, text: 'CM' },
        { value: 500, text: 'D' },
        { value: 400, text: 'CD' },
        { value: 90, text: 'XC' },
        { value: 50, text: 'L' },
        { value: 40, text: 'XL' },
        { value: 10, text: 'X' },
        { value: 9, text: 'IX' },
        { value: 5, text: 'V' },
        { value: 4, text: 'IV' },
        { value: 1, text: 'I' },
    ];
    let i = 0;
    let res = '';
    while (i < map.length && num > 0) {
        if (map[i].value <= num) {
            res += map[i].text;
            num -= map[i].value;
        } else {
            i++;
        }
    }
    return res;
};