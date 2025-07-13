// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6

function maxSubArray(nums) {
    let maxSum = nums[0];
    let currentSum = 0;

    for (const num of nums) {
        currentSum = Math.max(num, currentSum + num);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
};

// Explanation:
// We use Kadane’s algorithm to iterate through the array, keeping track of the current sum and the maximum sum found.

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6