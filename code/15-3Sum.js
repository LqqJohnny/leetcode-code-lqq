/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var ret = [];
    var retStr = [];
    for(var i = 0;i<nums.length;i++){
        var a = nums[i];
        for(var j = i+1;j<nums.length;j++){
            var b = nums[j];
            for(var h = j+1;h<nums.length;h++){
                var c = nums[h];
                if(a+b+c===0){
                    var arr = [a,b,c].sort(function(a,b){return a-b;})
                    if(retStr.indexOf(arr.join(""))<0){
                        ret.push(arr);
                        retStr.push(arr.join(""));
                    }
                }
            }
        }
    }
    return ret;
};
//  还是 会超时的问题 时间复杂度比较大
