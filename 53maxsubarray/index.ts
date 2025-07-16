function maxSubArray(nums: number[]): number {
    let currentSum = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > currentSum + nums[i]) {
      currentSum = nums[i];
    } else {
      currentSum = currentSum + nums[i];
    }

    if (currentSum > max) {
      max = currentSum;
    }
  }

  return max;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));