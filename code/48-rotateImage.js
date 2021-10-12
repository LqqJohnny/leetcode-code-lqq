/** 90度旋转一个二元数组
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var len = matrix.length;
    var rotated = JSON.parse(JSON.stringify(matrix));
    for(var i = 0 ;i<len ;i++){
        for(var j = 0 ;j<len;j++){
            matrix[j][len-1-i] = rotated[i][j];
        }
    }

};
//  这里涉及到 数组的 深复制
//  如果只用 array.slice 的话 无法成功 它是浅复制
//  这个题目需要用深复制才可以 深复制的方法 有多种
