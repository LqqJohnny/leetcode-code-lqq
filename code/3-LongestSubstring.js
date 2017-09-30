/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var temp= [];
    var max=0;
    for(var i = 0;i<s.length;i++){
        if(temp.indexOf(s[i])<0){
            temp.push(s[i]);

        }else{
            max = Math.max(temp.length , max);
            temp=temp.slice(temp.indexOf(s[i])+1);  // 如果重了 就从重了那个位置 截断 去掉前面的
            temp.push(s[i])
        }

    }
    max = Math.max(temp.length , max);
    return max;
};
