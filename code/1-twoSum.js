/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 * --lqq
 */
var twoSum = function(nums, target) {
    var ret= [];
    for(var i = 0;i<nums.length;i++){
        for(var j= i +1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                ret.push(i);
                ret.push(j);
            }
        }
    }
    return ret;
};

//  ----2----

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var ret= [];
    nums.forEach(function(num,idx){
		var minus = target- num;
		if(nums.indexOf(minus)>0){
			ret=[idx,nums.indexOf(minus)];
		}
	})
    return ret;
};
