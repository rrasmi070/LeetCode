/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let n = nums.length;
    while (n >= 0){
        if (nums[n] ==val){
            nums.splice(n, 1)
        }
        n--
    }    
    return nums.length
    
};