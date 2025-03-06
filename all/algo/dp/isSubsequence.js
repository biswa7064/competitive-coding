function isSubsequence(s, t) {
  const m = s.length,
    n = t.length
  const dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(false))
  // Base case: An empty string "" is always a subsequence of any string
  for (let j = 0; j <= n; j++) {
    dp[0][j] = true
  }

  // Fill the DP table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] // Include this character
      } else {
        dp[i][j] = dp[i][j - 1] // Skip current character in `t`
      }
    }
  }
  return dp[m][n]
}

// Example Usage
console.log(isSubsequence("abc", "ahbgdc")) // Output: true
console.log(isSubsequence("agd", "ahbgdc")) // Output: true
console.log(isSubsequence("axc", "ahbgdc")) // Output: false
