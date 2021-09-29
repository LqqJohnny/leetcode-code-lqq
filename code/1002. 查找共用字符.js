// https://leetcode-cn.com/problems/find-common-characters/


/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
    let result = [];

    let wordsMap = words.map(val=>{
        let curmap = {};
        for(let i  =0  ;i<val.length; i++){
            if(curmap[val[i]]){
                curmap[val[i]]++;
            }else{
                curmap[val[i]] = 1;
            }
        }
        return curmap;
    })
    console.log(wordsMap);
    // 就拿第一个 wordmap 中的key 去其他里面寻找
    let target = wordsMap[0];
    Object.keys(target).forEach(key=>{
        let ifAllHave = wordsMap.slice().every(map=>{
            if (map[key]){
                map[key]--;
                return true;
            }
            return false;
        })
        if (ifAllHave){
            result.push(key);
        }
    })
    return result;
};

console.log(commonChars(["bella", "label", "roller"]));
