// https://leetcode-cn.com/problems/n-queens/


/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let result = [];
    let chess = [];
    for(let i = 0 ; i < n; i++){
        let  temp =[];
        for (let j = 0; j < n; j++){
            temp.push('.')
        }
        chess.push(temp);
    }
    backTracking(n, 0, chess);

    return result;

    // n 第n行  row 行  
    function backTracking(n, row, chess){
        if(row === n){
            result.push(chess.map(arr => {
                return arr.join('');
            }));
        }
        for(let col = 0; col < n; col++){
           if(isValid(row, col, chess, n)){
               chess[row][col] = 'Q';
               backTracking(n, row+1, chess);
               chess[row][col] = '.';
           }
        }
    }
    function isValid(row, col, chess, n) {
        // 列 
        for (let i = 0; i < row; i++) {
            if (chess[i][col] === 'Q') {
                return false;
            }
        }
        // 45度 斜线 \
        let i = row - 1, j = col - 1;
        while (i >= 0 && j >= 0) {
            if (chess[i][j] === 'Q') {
                return false;
            } else {
                i--;
                j--;
            }
        }
        // 135度 斜线 /
        i = row - 1, j = col + 1;
        while (i >= 0 && j < n) {
            if (chess[i][j] === 'Q') {
                return false;
            } else {
                i--;
                j++;
            }
        }
        return true;
    }
};

console.log(solveNQueens(4))