function lengthOfLongestSubstring(s: string): number {
  let ans = 0;
  const count = new Map<string, number>();

  let l = 0;
  for (let r = 0; r < s.length; r++) {
    const char = s[r];
    count.set(char, (count.get(char) || 0) + 1);

    while ((count.get(char) || 0) > 1) {
      const leftChar = s[l];
      count.set(leftChar, (count.get(leftChar) || 0) - 1);
      l += 1;
    }

    ans = Math.max(ans, r - l + 1);
  }

  return ans;
}

console.log(lengthOfLongestSubstring("abcabcbb"));