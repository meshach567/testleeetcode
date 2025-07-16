function productExceptSelf(nums: number[]): number[] {
    const n: number = nums.length;
  const res: number[] = new Array(n).fill(1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        res[i] *= nums[j];
      }
    }
  }

  return res;
};

console.log(productExceptSelf([1,2,3,4]));