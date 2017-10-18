/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var res = "";
    for(var i = 0;i<n ;i++){
        res = analyse(res);
    }
    return res;
};
/**
* 根据传入的str 得出下一个字符串
*/
function analyse(str){
    if(str.length<=1){return "1"+str;}
    var res = {w:str[0],count:1}; // 用json来暂存描述(say)的结果
    var retStr = "";
    for(var i = 1;i<str.length ;i++){
        if(res.w === str[i]){
            res.count++;
        }else{
            // 如果当前的字符于前一个不一样 则清除res 重新计数
            retStr+= res.count +""+res.w ;
            res = {w:str[i],count:1};
        }
    }
    retStr+= res.count +""+res.w ;
    return retStr;
}
