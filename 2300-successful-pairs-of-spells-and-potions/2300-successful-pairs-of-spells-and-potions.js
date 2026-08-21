/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    potions.sort((a, b) => a - b);
    const m = potions.length;
    const ans = [];
    
    for (let spell of spells) {
        let left = 0;
        let right = m - 1;
        let firstValidIndex = m;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (spell * potions[mid] >= success) {
                firstValidIndex = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        ans.push(m - firstValidIndex);
    }
    return ans;
};