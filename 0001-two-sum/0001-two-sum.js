/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let arr = new Map()
    for (let i=0; i<nums.length; i++){
        let newval = target-nums[i]
        if (arr.has(newval)){
            let n = arr.get(newval);
            return [n, i];
        }
        arr.set(nums[i],i)
    }
    return []
};