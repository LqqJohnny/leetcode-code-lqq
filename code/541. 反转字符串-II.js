// https://leetcode-cn.com/problems/reverse-string-ii/


/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let result = '';
    let needReverse = true;
    for (let i = 0; i < s.length;) {
        let cur = s.substr(i , k);
        if (needReverse){
            result += cur.split('').reverse().join('');
        }else{
            result += cur;
        }
        needReverse = !needReverse;
        i+=k;
    }

    return result;
};

let  s = "abcdefg", k = 2;

console.log(reverseStr(s, k));