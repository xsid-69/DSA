/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let ans = s+s;

    return ans.slice(1,-1).includes(s);
};