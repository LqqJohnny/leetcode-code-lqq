// https://leetcode-cn.com/problems/pascals-triangle/


/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let result = [[1]];
    for (let i = 1; i < numRows; i++) {
        let current = [];
        let half = Math.floor(i / 2); // 中心点 0
        for (let j = 0; j <= half; j++) {
            let count = 1;
            if (j > 0) {
                let left = result[i - 1][j - 1] || 0;
                let right = result[i - 1][j] || 0;
                count = left + right;
            }
            current[j] = count;
            current[i - j] = count;
        }

        result[i] = current;
    }

    return result;
};



// 每一个 数 都是 等于 他上面一行的 同index 的数 + 同index-1数
var generate2 = function (numRows) {
    let result = [[1],[1,1]];
    if(numRows <= 2){
        return result.slice(0,numRows);
    }
    for (let i = 2; i < numRows; i++) {
        let temp = [];
        for(let j = 0; j <= i ; j++){
            temp[j] = (result[i - 1][j] || 0) + (result[i - 1][j-1] || 0);
        }
        result.push(temp);
    }
    return result;
}

console.log(generate2(4));