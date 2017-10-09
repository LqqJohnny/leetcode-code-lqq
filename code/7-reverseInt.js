/**js 的int 极限是  math.pow(2,32) 所以在leetcode上可能过不了测试
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(!Number.isSafeInteger(x)){
        return 0
    }
    var str = x.toString();
    var retStr = "";
    if(str.indexOf('-')>=0){
        retStr='-';
    }else{
        retStr = ""
    }
    retStr += Math.abs(x).toString().split("").reverse().join("");
    return parseInt(retStr);
};
