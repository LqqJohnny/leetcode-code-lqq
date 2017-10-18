/** 判断一个数独 是不是有效的
 *  只需要对二维数组里面的 数字进行判断 三次 ---行 列 九宫格
 *  如果都没有重复的 那就是有效的 否则 说明这个数独 有问题
 *
 * 这个数独里面 只有部分是有数组的 空的地方 用. 表示
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // 对于每一个不是 . 的数字 都要判断三次 ： 横  竖  九宫格
    for(var i = 0 ;i<board.length;i++){
        for(var j = 0 ;j<board[i].length;j++){
            var temp = board[i][j];
            if( temp !== "."){ // 如果不是空 就进行判断
                // 行
                if(board[i].indexOf(temp) !== board[i].lastIndexOf(temp)){
                    // 当前的这个数字 在这一行里面 有 重复
                    return false;
                }
                // 列
                for(var h =0 ;h<9;h++){
                    if(h!==i && board[h][j] === temp){
                        return false;
                    }
                }
                // 九宫格
                var i_index = Math.floor(i/3)*3;
                var j_index = Math.floor(j/3)*3;
                for(var a = 0 ;a<3;a++){
                    var x = i_index+a;
                    for(var b = 0 ;b<3;b++){
                        var y = j_index+b;
                        if((x!==i || y!==j) && board[x][y] === temp){
                            return false;
                        }
                    }
                }
            }
        }
    }
    return true;
};
