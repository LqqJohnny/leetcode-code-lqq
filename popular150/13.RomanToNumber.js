// 13. 罗马数字转整数
// https://leetcode-cn.com/problems/roman-to-integer/


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let count = 0;
    let map = {
        I: 1,
        V: 5,
        IV: 4,
        IX: 9,
        X: 10,
        XL: 40,
        XC: 90,
        L: 50,
        C: 100,
        CD: 400,
        CM: 900,
        D: 500,
        M: 1000,
    };

    let len = s.length;
    for(let i = 0 ;i<len;){
        if(i<len 
        && map[s.slice(i,i+2)]
        ){
            count += map[s.slice(i,i+2)];
            i+=2;
        }else{
            count += map[s.slice(i,i+1)];
            i+=1;
        }
    }
    return count;
};