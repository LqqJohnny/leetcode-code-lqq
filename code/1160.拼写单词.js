// https://leetcode-cn.com/problems/find-words-that-can-be-formed-by-characters/

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
    let wordsCount = 0;

    // 先建立  chars 的map
    let charsMap = arrayToMap(chars);

    words.forEach(val=>{
        let curMap = arrayToMap(val);
        let hasAllChar = true;
        for (let key in curMap){
            if (!charsMap[key] || charsMap[key] < curMap[key]){
                hasAllChar = false;
                break;
            }
        }
        if (hasAllChar){
            wordsCount += val.length;
        }
    })

    return wordsCount;
};

function arrayToMap(array){
    let map = {};
    for (let i = 0; i < array.length; i++) {
        if (!map[array[i]]) {
            map[array[i]] = 1;
        } else {
            map[array[i]]++;
        }
    }

    return map;
}