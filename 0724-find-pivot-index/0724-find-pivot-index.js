/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let leftSum =[0];
    let rightSum= 0;
    let ans = -1;
    for(let i=0;i<=nums.length-1;i++){
        leftSum.push(leftSum[i] + nums[i]);
    }
    for(let i=nums.length-1;i>=0;i--){
       
        if(leftSum[i] === rightSum){
            ans = i;
        }
         rightSum += nums[i];
    }
    return ans;
};