/** 最长回文字符串 (从左到右 和从右到左 是一样的)
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
	    var longestStr= s[0];
	    for(var i = 0;i<s.length; i++){
	        var firstWord = s[i];
	        var tempStr = s;
	        while(tempStr.lastIndexOf(firstWord) !==i){
	            var secondIdx = tempStr.lastIndexOf(firstWord);
	            var temp = tempStr.substring(i,secondIdx+1);
	            if(temp == temp.split("").reverse().join('') ){ //判断是否是 回文
	                longestStr =longestStr.length<temp.length ? temp:longestStr;
	            }
	            tempStr = tempStr.substr(0,secondIdx);
	        }

	    }
	    return  longestStr;
	};

    //  此方法 在字符串过长的时候 非常耗时  待改进
