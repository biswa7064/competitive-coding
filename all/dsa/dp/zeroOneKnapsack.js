function zeroOneKnapsack(strArr, m, n) {
  let dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0))
  for (let str of strArr) {
    const zeroes = str.split("0").length - 1
    const ones = str.length - zeroes
    //  Traverse DP table **backwards** to avoid overwriting
    for (let i = m; i >= zeroes; i--) {
      for (let j = n; j >= ones; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - zeroes][j - ones] + 1)
      }
    }
  }
  return dp[m][n]
}

// Example Usage:
console.log(zeroOneKnapsack(["10", "0001", "111001", "1", "0"], 5, 3)) // Output: 4
console.log(zeroOneKnapsack(["10", "0", "1"], 1, 1)) // Output: 2
