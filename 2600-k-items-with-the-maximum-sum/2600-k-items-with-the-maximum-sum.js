/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {
    if(numOnes >= k){
        return k;
    }else if(numOnes <= k){
        let temp = k- numOnes;
        if(temp>numZeros){
            let temp2 = temp - numZeros;
            return numOnes - temp2;
        }else{
            return k-temp;
        }
    }
    
};