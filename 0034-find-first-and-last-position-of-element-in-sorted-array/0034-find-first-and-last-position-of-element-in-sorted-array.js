/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let ans=[];
    let low1 = 0, high1 = nums.length;
    while (low1 < high1) {
        let mid1 = Math.floor((low1 + high1) / 2);
        if (nums[mid1] >= target) {
            high1 = mid1;
        } else {
            low1 = mid1 + 1;
        }
    }
    ans[0]=low1;

    if (low1 === nums.length || nums[low1] !== target) {
        return [-1, -1];
    }

    let low2= 0, high2 = nums.length;
    while (low2 < high2) {
        let mid2 = Math.floor((low2 + high2) / 2);
        if (nums[mid2] > target) {
            high2 = mid2;
        } else {
            low2 = mid2 + 1;
        }
    }
    ans[1]=low2-1;

    return ans;
};