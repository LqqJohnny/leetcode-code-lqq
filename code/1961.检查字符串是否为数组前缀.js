// https://leetcode-cn.com/problems/check-if-string-is-a-prefix-of-array/

/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function (s, words) {
    let index = s.indexOf(words[0]);
    if(index!==0){
        return false;
    }
    index = words[0].length;
    if(index === s.length){
        return true;
    }
    for (let i = 1; i < words.length; i++) {
        const word = words[i];
        if(s.indexOf(word,index) === index){
            index += word.length;
            if (index === s.length){
                break;
            }
        }else{
            return false;
        }
    }

    return index === s.length;
};


console.log(isPrefixString("ccccccccc",["c", "cc"]));