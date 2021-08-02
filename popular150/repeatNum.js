// 判断数组中是否存在重复的值

// 思路 用一个临时对象 存储 key 是数字的值 ， value 是数字出现的次数。当次数>1 则中断循环 返回false

function hasDupliteNum( array ){
    if(array.length < 2){
        return false;
    }
    const length = array.length;
    const map = {};
    for( let i = 0 ; i<length ; i++ ){
        if(map[array[i]]){
            return true;
        }else{
            map[array[i]] = 1 ;
        }
    }
    return false;
}

let  test  = [0,2,10,3,43,11,22,33]

console.log(hasDupliteNum(test));