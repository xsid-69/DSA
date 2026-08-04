/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    nums.sort((a, b) => a - b);
    let init = nums[0];
    let end = nums[nums.length-1];
    let ans =[];
    for(let i=init;i<end;i++){
        if(!nums.includes(i)){
           ans.push(i);
        }
    }
    return ans;
};