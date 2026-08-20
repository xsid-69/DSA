/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        if (!ans.includes(nums[i])) {
            ans.push(nums[i]);
        } else {
            ans = ans.filter(item => item !== nums[i]);
        }
    }
    return ans.length == 0;
};