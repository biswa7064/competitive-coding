function lcsUsingDP(s1, s2) {
  const m = s1.length,
    n = s2.length
  let dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0))
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[m][n]
}

console.log(lcsUsingDP("HARRY", "SALLY")) // Output: 2 ("AY")
console.log(lcsUsingDP("AA", "BB")) // Output: 0 (No common subsequence)
console.log(lcsUsingDP("ABCD", "ABDC")) // Output: 3 ("NHA")
console.log(lcsUsingDP("ABCDEF", "FBDAMN")) // Output: 2 ("BD")
