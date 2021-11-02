// https://leetcode-cn.com/problems/find-the-difference/


/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let map = {};
    for(let i = 0; i < s.length ; i++){
        if( !map[s[i]] ){
            map[s[i]] = 1;
        }else{
            map[s[i]] ++ ;
        }
    }

    // 验证
    for (let j = 0; j < t.length; j++) {
        if(map[t[j]]){
            map[t[j]]--;
        }else{
            return t[j];
        }
    }
    return ''
};