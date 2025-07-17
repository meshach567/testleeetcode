function firstMissingPositive(nums: number[]): number {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    // Place nums[i] at its correct position if it's in the range [1, n]
    while (
      nums[i] > 0 &&
      nums[i] <= n &&
      nums[nums[i] - 1] !== nums[i]
    ) {
      const correctIndex = nums[i] - 1;
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return n + 1;
}

console.log(firstMissingPositive([1,2,0]));