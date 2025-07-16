function countSubstrings(s: string): number {
  function extendPalindromes(l: number, r: number): number {
    let count = 0;

    while (l >= 0 && r < s.length && s[l] === s[r]) {
      count++;
      l--;
      r++;
    }

    return count;
  }

  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    ans += extendPalindromes(i, i);     // Odd-length palindromes
    ans += extendPalindromes(i, i + 1); // Even-length palindromes
  }

  return ans;
}

// Example usage:
console.log(countSubstrings("abc"));    // Output: 3
console.log(countSubstrings("aaa"));    // Output: 6
