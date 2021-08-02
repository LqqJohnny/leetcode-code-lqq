
/**
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * leetcode  387 
 * 地址 ： https://leetcode-cn.com/problems/first-unique-character-in-a-string/
 * 
 * 
 * @param {string} s
 * @return {number}
 */
// 思路 ： 先循环一遍计数，然后再循环一遍找第一个满足条件的字母
var firstUniqChar = function(s) {
    const map = {};
    for(let i = 0 ; i < s.length; i++ ){
        if(map[s[i]]){
          map[s[i]] +=1;    
        }else{
          map[s[i]]=1;    
        }
    }
    for(let j = 0 ; j < s.length; j++ ){
        if( map[s[j]]===1 ){
            return j;
        }
    }
    return -1;
};

console.log(firstUniqChar("leetcode"))