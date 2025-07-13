// Problem:
// Given an array nums of n integers, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

function productExceptSelf(nums) {
    const output = new Array(nums.length).fill(1);
    let left = 1, right = 1;

    for (let i = 0; i < nums.length; i++) {
        output[i] *= left;
        left *= nums[i];
        output[nums.length - 1 - i] *= right;
        right *= nums[nums.length - 1 - i];
    }
    return output;
}

console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
// Explanation:
// We maintain two products: one for the left side and one for the right side of each index. The final output is the product of these two values for each index, effectively excluding the current element.
// This approach runs in O(n) time and uses O(1) space (excluding the output array), making it efficient for large arrays.
// The algorithm iterates through the array twice: once from left to right to calculate the left products, and once from right to left to calculate the right products. This ensures that each element's product is calculated without including itself, as required by the problem statement.
// The use of a single output array to store the results allows us to avoid using additional space for intermediate calculations, thus optimizing space usage.
// The final output array contains the product of all elements except the one at the current index,