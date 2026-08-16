/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = [];
    left[0] = height[0];
    let right = [];
    right[height.length-1] = height[height.length-1];
    let ans =0 ;

    for(let i=1;i<height.length;i++){ 
        let maxLeft = Math.max(left[i-1],height[i]);
        left[i] = maxLeft;
    }
    for(let i=height.length-2;i>=0;i--){
        let maxRight = Math.max(right[i+1],height[i]);
        right[i] = maxRight;
    }
    for(let i=0;i<height.length;i++){
         ans += Math.min(left[i] , right[i]) - height[i];
    }   
    return ans;
};