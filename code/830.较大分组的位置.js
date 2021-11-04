// https://leetcode-cn.com/problems/positions-of-large-groups/


/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
    let word = s[0];
    let start = 0;
    let end = 0;
    let result = [];
    for (let i = 1; i < s.length; i++) {
        if (s[i] === word) {
            end = i;
        } else {
            if (end - start >= 2) {
                result.push([start, end]);
            }
            word = s[i]
            start = i;
            end = i;
        }
    }
    if(end - start >=2 ){
        result.push([start, end]);
    }
    return result;
};

let a = "aaa"
console.log(largeGroupPositions(a));