/** 一个字符串 只含有 {} [] () 中的一些
 * 判断这个字符串是否是 有效的 --
 *  []{}  有效   [)(]]{ 无效
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length%2 !== 0){return false;}
    var left = ['(','{','['];
    var right = [')','}',']'];
    var stack = [];
    for(var i = 0 ;i<s.length;i++){
        if(left.indexOf(s[i])>-1){
            stack.push(s[i]);
        }else{
            var supposeLeft = left[right.indexOf(s[i])];
            var stackLeft = stack.pop();
            if(stackLeft !== supposeLeft){
                return false;
            }
        }
    }
    if(stack.length>0){return false;}
    return true;
};

/**
 *  思路： 1 首先如果长度不是偶数 直接返回false
 *          2 遍历字符串 遇见左括号 压入‘栈’中 遇见 右括号则从栈中取出栈顶，如果不是对应的两个括号 直接返回false
 *          3 最后判断一下栈中还有没有括号 有则说明多出来了 返回false
 */
