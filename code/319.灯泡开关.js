// https://leetcode-cn.com/problems/bulb-switcher/


// 暴力解法
// 能算出解 但是 当n很大的时候， 会超时 例如 n=99999
/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function (n) {
    let arr = new Array(n).fill(false);

    for(let i = 1 ;i <= n ; i++){
        let step = i;
        for(let j = 0; j < arr.length;j++){
            if((j+1)%step === 0){
                arr[j] = !arr[j];
            }
        }
    }

    return arr.filter(val=>val).length;
};

console.log(bulbSwitch(55));