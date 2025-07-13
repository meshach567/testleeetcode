"use strict";
function findMaxLength(nums) {
    let ans = 0;
    let prefix = 0;
    const prefixToIndex = new Map();
    prefixToIndex.set(0, -1);
    for (let i = 0; i < nums.length; i++) {
        prefix += nums[i] === 1 ? 1 : -1;
        if (prefixToIndex.has(prefix)) {
            ans = Math.max(ans, i - prefixToIndex.get(prefix));
        }
        else {
            prefixToIndex.set(prefix, i);
        }
    }
    return ans;
}
// Example usage
const nums = [0, 1, 0, 0, 1, 1];
console.log(findMaxLength(nums)); // Output: 6
