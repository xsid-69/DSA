/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    let i = n;
    if(n%2===0){
        return n;
    }else{
        return n*2;
    }
};