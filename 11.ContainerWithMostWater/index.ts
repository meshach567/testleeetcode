function maxArea(height: number[]): number {
  let ans = 0;
  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    const minHeight = Math.min(height[l], height[r]);
    ans = Math.max(ans, minHeight * (r - l));

    if (height[l] < height[r]) {
      l += 1;
    } else {
      r -= 1;
    }
  }

  return ans;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
