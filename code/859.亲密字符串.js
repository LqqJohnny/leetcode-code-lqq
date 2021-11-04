// https://leetcode-cn.com/problems/buddy-strings/


/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
    if(s.length!==goal.length || s.length <=1){
        return false;
    }
    // 统计 两个字符串中对应位置不相等的字母 和次数
    let diffMap = {};
    let AllMap = {};
    for (let i = 0; i < s.length; i++) {
        if (!AllMap[s[i]]){
            AllMap[s[i]] = 1;
        }else{
            AllMap[s[i]]++;
        }
        if(s[i] !== goal[i]){
            if (diffMap[s[i]]){
                return false;
            }else{
                diffMap[s[i]] = goal[i];
            }
        }
    }
    console.log(diffMap, AllMap);

    if (Object.values(AllMap).filter(val=>val>=2).length > 0 && Object.values(diffMap).length === 0){
        return true;
    }
    if (Object.values(diffMap).length>2){
        return false;
    }
    for (let key in diffMap){
        if (key === diffMap[diffMap[key]]){
            return true;
        }
    }
    return false;
};

let s = 'aaab', goal = 'aaab'
console.log(buddyStrings(s, goal));