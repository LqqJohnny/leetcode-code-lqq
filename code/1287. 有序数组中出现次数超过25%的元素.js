// https://leetcode-cn.com/problems/element-appearing-more-than-25-in-sorted-array/


/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
    let times = 0;
    if (arr.length % 4 !== 0){
        times = Math.ceil(arr.length / 4);
    }else{
        times = (arr.length/4) + 1 ;
    }
    let map = {};
    for(let i = 0 ; i < arr.length ; i++){
        let val = arr[i];
        if (!map[val]){
            map[val] = 1;
        }else{
            map[val]++;
        }
        if(map[val]>=times){
            return val;
        }
    }
};

// console.log(findSpecialInteger([1, 2, 3, 3]));