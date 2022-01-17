/**
 * @param {number[][]} blocked
 * @param {number[]} source
 * @param {number[]} target
 * @return {boolean}
 */
var isEscapePossible = function (blocked, source, target) {
    let length = Math.pow(10,5)/2;
    let array = new Array(length).fill(0);
    array = array.map(val=>{
        let arr = new Array(length).fill(0);
        return arr;
    })
    let count = 0 ;
    array.forEach(val=>{
        val.forEach(val2=>{
            count++;
        })
    })
    console.log(count);

};

// 判断当前节点是否是可行 ， 如果被blocked 返回true 否则返回false
function checkBlocked(blockedStr, whiteList, source) {
    
}

let blocked = [], source = [0, 0], target = [999999, 999999];
console.log(isEscapePossible(blocked, source, target));