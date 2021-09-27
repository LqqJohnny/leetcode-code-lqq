// https://leetcode-cn.com/problems/flipping-an-image/


// 数组中的每一行 都先 水平翻转 ， 倒序 ， 然后再0 1 互换
/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
    let map = {
        '0': 1,
        '1': 0
    }
    return image.map(val=>{
        let reverseVal = val.reverse();
        return reverseVal.map(bit=>{
            return map[bit];
        })
    })
};