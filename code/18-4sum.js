/**  找出数组中所有 4个值的和等于target的组合
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var ret = [];
    var retString = []; // 用于判断是否 已存在
    for(let a = 0;a<nums.length-3;a++){
       var aa = nums[a]
       for(let b = a+1;b<nums.length-2;b++){
           var bb = nums[b];
            for(let c = b+1;c<nums.length-1;c++){
                var cc = nums[c];
                for(let d= c+1;d<nums.length;d++){
                    var dd = nums[d];
                    if(aa+bb+cc+dd === target){
                        var arr = [aa,bb,cc,dd];
                        arr.sort(function(a,b){return a-b});
                        if(retString.indexOf(arr.join(''))<0){
                            ret.push(arr);
                            retString.push(arr.join(''));
                        }
                    }
                }
            }
        }
   }
    return ret;
};
//  这个方法的耗时比较长 在leetcode上面跑回报超时  待改进
