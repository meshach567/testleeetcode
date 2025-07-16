function minWindow(s: string, t: string): string {
  const count: Record<string, number> = {};

  // Initialize frequency map of t
  for (const char of t) {
    count[char] = (count[char] || 0) + 1;
  }

  let required = t.length;
  let bestLeft = -1;
  let minLength = s.length + 1;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const c = s[right];

    if (c in count) {
      count[c]--;
      if (count[c] >= 0) {
        required--;
      }
    }

    while (required === 0) {
      if (right - left + 1 < minLength) {
        bestLeft = left;
        minLength = right - left + 1;
      }

      const leftChar = s[left];
      if (leftChar in count) {
        count[leftChar]++;
        if (count[leftChar] > 0) {
          required++;
        }
      }

      left++;
    }
  }

  return bestLeft === -1 ? "" : s.slice(bestLeft, bestLeft + minLength);
}

console.log(minWindow("ADOBECODEBANC", "ABC"))