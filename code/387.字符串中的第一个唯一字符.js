// https://leetcode-cn.com/problems/first-unique-character-in-a-string/

// 先对字符串进行 计数 ， 再找出第一个次数为 1 的字符
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let map = {};
    for (let i = 0; i < s.length; i++) {
        if(!map[ s[i] ]){
            map[s[i]] = 1;
        }else{
            map[s[i]]++;
        }
    }

    for (let j = 0; j < s.length; j++) {
        if(map[s[j]] === 1){
            return j;
        }
    }
    return -1;
};

let s = "loveleetcode"
console.log(firstUniqChar(s));
