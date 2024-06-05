/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0;
    let len = nums.length-1
    while (start <= len){
        mid = Math.floor((len+start)/2);
        
        if (target == nums[mid]){
            return mid
        }
        else if(nums[mid] > target){
            len = mid-1
        }
        else {
            start = mid+1
        }
    
    }
    return start
};