// https://leetcode-cn.com/problems/valid-sudoku/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    // 分别对 行 列 九宫格 进行校验 
    let length = board.length;
    // 行
    for (let i = 0; i < length; i++) {
        const row = board[i];
        if (!isValidNineNumber(row)){
            return false;
        }
    }
    // 列
    for (let j = 0; j < length; j++) {
        let column = [];
        for (let h = 0; h < length; h++) {
            column.push(board[h][j]);
        }
        if (!isValidNineNumber(column)) {
            return false;
        }
    }
    // 九宫格
    let m = 0;
    while(m<9){
        let n = 0;
        while(n<9){
            let square = [];
            for (let j = m; j < m + 3; j++) {
                for (let h = n; h < n + 3; h++) {
                    square.push(board[j][h]);
                }
            }
            if (!isValidNineNumber(square)) {
                return false;
            }
            n += 3;
        }
        m+=3;
    }

    return true;
};

// 检查 传入的数组中 是否存在重复的数字
var isValidNineNumber = function (arr){
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === '.'){
            continue;
        }
        if(map[arr[i]]){
            return false;
        }else{
            map[arr[i]] = 1;
        }
    }
    return true;
}



















let board =[
    [".", ".", "4", ".", ".", ".", "6", "3", "."], 
    [".", ".", ".", ".", ".", ".", ".", ".", "."], 
    ["5", ".", ".", ".", ".", ".", ".", "9", "."], 
    [".", ".", ".", "5", "6", ".", ".", ".", "."], 
    ["4", ".", "3", ".", ".", ".", ".", ".", "1"], 
    [".", ".", ".", "7", ".", ".", ".", ".", "."], 
    [".", ".", ".", "5", ".", ".", ".", ".", "."], 
    [".", ".", ".", ".", ".", ".", ".", ".", "."], 
    [".", ".", ".", ".", ".", ".", ".", ".", "."]]

console.log(isValidSudoku(board));

