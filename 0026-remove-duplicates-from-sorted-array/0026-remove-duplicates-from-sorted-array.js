/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let n = nums.length -1;
    while (n > 0){
        if (nums[n] == nums[n-1]){
            nums.splice(n, 1)
        }
        n--
    }
    return nums.length
};