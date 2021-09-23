// https://leetcode-cn.com/problems/keyboard-row/
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    let map = [{
        'q': true,
        'w': true,
        'e': true,
        'r': true,
        't': true,
        'y': true,
        'u': true,
        'i': true,
        'o': true,
        'p': true
    }, {
        'a': true,
        's': true,
        'd': true,
        'f': true,
        'g': true,
        'h': true,
        'j': true,
        'k': true,
        'l': true
    }, {
        'z': true,
        'x': true,
        'c': true,
        'v': true,
        'b': true,
        'n': true,
        'm': true
    }]
    let result = [];
    words.forEach(word => {
        // 获取第一个字母所在的行
        let firstWordRow = map.filter(row => {
            return row[word[0].toLowerCase()];
        })[0];
        // 用这一行去验证接下来的字母是否都在这一行
        let ifAllInOneRow = word.split('').every(char => {
            return firstWordRow[char.toLowerCase()];
        })
        if (ifAllInOneRow) {
            result.push(word);
        }
    })
    return result;
};