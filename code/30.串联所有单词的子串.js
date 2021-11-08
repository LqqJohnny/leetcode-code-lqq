// https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/

// 重点： 长度相同 ， 所有单词组成 
// 意味着 你要找的字符串 长度是固定的 ===  移动窗口 
// 然后用移动窗口一个个去判断当前的字符串 ， 是否是 全单词组成 


/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    let result = [];
    let oneWordLen = words[0].length
    let len = oneWordLen * words.length;
    let left = 0;
    let right = len;
    if(s.length < len){
        return [];
    }

    while(right <= s.length){
        let curStr = s.slice(left , right);
        let _words = words.slice();

        for (let i = 0; i < len; i += oneWordLen){
            let word = curStr.slice(i, i+oneWordLen);
            let index = _words.indexOf(word);
            if (index>=0){
                console.log('=====',word,index);
                _words.splice(index, 1);
            }else{
                console.log(left, right, curStr, '没找到：' + word, _words);
                break;
            }
            
        }

        if (_words.length===0){
            result.push(left);
        }
        left++;
        right++;
    }

    return result;
}

console.log(findSubstring('wordgoodgoodgoodbestword', ["word", "good", "best", "word"]));