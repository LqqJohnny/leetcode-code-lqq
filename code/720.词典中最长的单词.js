// https://leetcode-cn.com/problems/longest-word-in-dictionary/

/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
    // 表示每个单词 是否是有其他逐步加起来的
    let isAddedWord = {}; 
    let theLongestWord = '';
    // 先排序 按照字符长度 和 字母顺序
    words.sort((a , b)=>{
        if(a.length === b.length){
            return a>b;
        }else{
            return a.length - b.length;
        }
    })
    // 逐步判断每一个单词是否是 逐步累加词
    words.forEach(val=>{
        let lastWord = val.slice(0, -1);
        if (val.length > 1 && !isAddedWord[lastWord]){
            isAddedWord[val] = false;
        }else{
            isAddedWord[val] = true;
            if(val.length > theLongestWord.length){
                theLongestWord = val;
            }
        }
    })

    return theLongestWord;
};

let words = ["a", "banana", "app", "appl", "ap", "apply", "apple"];

console.log(longestWord(words));