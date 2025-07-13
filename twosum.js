//Given an array of integers and a target integer, return the indices of the two numbers such that they add up to the target.

// Input: nums = [2, 7, 11, 15], target = 9
//Output: [0, 1]


function twoSum(nums, target) {
    const numMap = new Map();

    for (let i = 0; i < nums.length; i++) {

        const compliment = target - nums[i];
        if (numMap.has(compliment)) {
            return [numMap.get(compliment), i];
        }
        numMap.set(nums[i], i);
    }
}

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]

//Explanation:
//We use a hash map to store the numbers and their indices. For each number, we check if the complement (target — current number) exists in the map. If it does, we return the indices.