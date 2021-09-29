// https://leetcode-cn.com/problems/find-the-town-judge/

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    let civilians = [];
    let trustMap = {};
    if (trust.length===0){
        if(n===1){
            return 1;
        }else{
            return -1;
        }
    }
    trust.forEach(val=>{
        let civilian = val[0];
        if (civilians.indexOf(civilian) < 0){
            civilians.push(civilian);
        }
        if (trustMap[civilian]){
            trustMap[civilian].push(val[1])
        }else{
            trustMap[civilian] = [val[1]];
        }
    })
    let judge = -1;
    for (let i = 1; i <=n; i++) {
        if (civilians.indexOf(i) < 0){
            judge = i;
        }
    }
    for (let i = 1; i <= n; i++) {
        if (trustMap[i] && trustMap[i].indexOf(judge) < 0) {
            return -1;
        }
    }
    
    return judge;
};
let  n = 2;
let trust = [[1, 2]]

// console.log(findJudge(n, trust ));