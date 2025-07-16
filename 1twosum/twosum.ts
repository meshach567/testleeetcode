function TwoSum(numbers: number[], target: number): number[] {
  let l = 0;
  let r = numbers.length - 1;

  while (l < r) {
    const sum = numbers[l] + numbers[r];

    if (sum === target) {
      return [l + 1, r + 1]; // 1-based indexing
    } else if (sum < target) {
      l++;
    } else {
      r--;
    }
  }

  return []; // If no solution found
}

// Example usage
console.log(TwoSum([2,7,11,15], 9)); // Output: [1, 2]
