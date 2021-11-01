// https://leetcode-cn.com/problems/roman-to-integer/

/**
 * 
 * 
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

 * 
 * 
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let map = {
        'I' :             1,
        'IV':             4,
        'V':              5,
        'IX':             9,
        'X':              10,
        'XL':             40,
        'L':              50,
        'XC':             90,
        'C' :             100,
        'CD':             400,
        'D' :             500,
        'CM':             900,
        'M':              1000,
    }
    let i = 0;
    let count = 0;
    while(i<s.length){
        if (map[ s[i] + s[i + 1] ]){
            count += map[s[i] + s[i + 1]];
            i+=2;
        }else{
            count += map[s[i]];
            i++;
        }
    }
    return count;
};
let s = 'LVIII'  // MCMXCIV
console.log(romanToInt(s));