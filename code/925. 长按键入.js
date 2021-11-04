// https://leetcode-cn.com/problems/long-pressed-name/


/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
    let i = 0; 
    let j = 0;
    if(name.length>typed.length){
        return false;
    }
    while(i<name.length && j<typed.length){
        if(name[i] === typed[j]){
            i++;
            j++;
        }else{
            if (typed[j] === name[i-1]){
                j++;
            }else{
                return false;
            }
        }
    }
    // name 还有剩余没匹配到的
    if(i < name.length){
        return false;
    }
    // typed 剩下的字母 是不是name中最后一个字母的重复
    for (let h = j; h < typed.length; h++) {
        if(typed[h] !== name[name.length-1]){
            return false;
        }
    }

    return true;
};

let name = "aleex", typed = "aaleeeee"

console.log(isLongPressedName(name , typed));