/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    nums.sort((a,b)=>(a-b));
    let i=0,j=nums.length-1;
    let ans = 0;
    while(i<j){
        if(nums[i]+nums[j] == k){
            ans++;
            i++;
            j--;
        }else{
            if(nums[i]+nums[j] < k){
                i++;
            }else{
                j--;
            }
        }
    }
    return ans;
};