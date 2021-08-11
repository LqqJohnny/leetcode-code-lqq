// 118. 杨辉三角
// https://leetcode-cn.com/problems/pascals-triangle/

// 生成制定行数的杨辉三角 二维数组结构

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [];
    for(let i = 0 ;i<numRows ; i++){
        let len = i+1;
        let row = [1];
        for(let j = 1 ;j<len;j++){
            if(j === len - 1){
                row.push(1);
            }else{
                row.push(result[i-1][j-1] + result[i-1][j]);
            }
        }
        result.push(row);
    }
    return result;
};