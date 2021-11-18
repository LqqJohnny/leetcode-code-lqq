// https://leetcode-cn.com/problems/reshape-the-matrix/


/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
    if(mat.length * mat[0].length !== r * c){
        return mat;
    }

    let result = [];
    let temp = []
    for(let i = 0 ;i < mat.length ; i++){
        for (let j = 0; j < mat[i].length; j++) {
            temp.push(mat[i][j]);
            if(temp.length === c){
                result.push(temp);
                temp = [];
            }
        }
    }

    return result;
}; 