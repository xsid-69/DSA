/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function(n) {

    let sum = 0;
    let prod = 1;
    let str = n + "";
    for(let i=0;i<str.length;i++){
        let temp = +str[i];
        sum += temp;
        prod*= temp;
    }

    return n %(sum+prod) == 0;
};