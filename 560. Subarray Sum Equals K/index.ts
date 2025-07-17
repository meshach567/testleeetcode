function subarraySum(nums: number[], k: number): number {
  let ans = 0;
  let prefix = 0;
  const count = new Map<number, number>();
  count.set(0, 1);

  for (const num of nums) {
    prefix += num;
    const needed = prefix - k;
    ans += count.get(needed) ?? 0;
    count.set(prefix, (count.get(prefix) ?? 0) + 1);
  }

  return ans;
}

// Example usage:
console.log(subarraySum([1, 1, 1], 2)); // Output: 2
console.log(subarraySum([1, 2, 3], 3)); // Output: 1
