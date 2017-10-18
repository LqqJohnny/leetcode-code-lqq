/**
 * 有一个字符串数组 找出这个数组中每个元素的都有的最长前缀
 * ['adc123','adc34','adc34444','adc234234']  --->  adc
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var longest = "";
    if(strs==null || strs.length==0){return ""}
    for(var i = 0 ;i<strs[0].length;i++){
        longest +=strs[0][i];
        for(var j = 0;j<strs.length;j++){
            if(strs[j].indexOf(longest) !== 0){
                return longest.substring(0,longest.length-1)
            }
        }
    }
    return longest;
};
