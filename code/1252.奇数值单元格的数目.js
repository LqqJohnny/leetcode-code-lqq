// https://leetcode-cn.com/problems/cells-with-odd-values-in-a-matrix/

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {

    let plusInRows = new Array(m).fill(0);
    let plusInColumns = new Array(n).fill(0);
    // 先做统计 算出 每一行 每一列 +1 的次数 
    indices.forEach(val=>{
        let row = val[0];
        let column = val[1];
        plusInRows[row]++;
        plusInColumns[column]++;
    })
    // 根据以上结果， 计算每一个位置的值是否是奇数 并统计
    let count= 0 ;
    for (let i = 0; i < m; i++) {
        for(let j = 0;j<n;j++){
            let num = plusInRows[i] + plusInColumns[j];
            if(num%2===1){
                count++;
            }
        }
    }
    
    return count;
};
let m = 2, n = 3, indices = [[0, 1], [1, 1]]
console.log(oddCells(m, n, indices));