/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function(nums, k) {
    const step = k;
    let current = k;
    if(!nums.includes(k)) return k;
    while(k <= 1001){
        if(nums.includes(current)){
            current += step;
        }else{
            return current;
        }
    }

};