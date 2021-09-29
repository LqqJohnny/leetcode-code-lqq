// https://leetcode-cn.com/problems/di-string-match/

/**
 * @param {string} s  : I D I D
 * @return {number[]}
 * 
 * D 的位置要尽量放最大的数  I 的位置要尽量放最小的数
 * 
 */
var diStringMatch = function (s) {
    let arrayLen = s.length + 1;
    let allNums = new Array(arrayLen);
    let result = [];
    for (let i = 0; i < arrayLen; i++) {
        allNums[i] = i;
    }
    for (let i = 0; i < s.length; i++) {
        const action = s[i];
        if(action === 'D'){
            result[i] = allNums.pop();
        }else{
            result[i] = allNums.shift();
        }
    }

    return [...result, ...allNums];
};

// console.log(diStringMatch('DDI'));
