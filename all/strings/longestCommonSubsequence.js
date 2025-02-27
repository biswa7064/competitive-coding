function longestCommonSubsequence(str1, str2) {
  const m = str1.length
  const n = str2.length
  // 2d array
  const dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0))
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // If the letters match, look diagonally to get the max subsequence before this letter and add one
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        // If there is no match, set the cell to the previous current longest subsequence
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  let lcs = ""
  for (let i = m, j = n; i > 0 && j > 0; ) {
    if (str1[i - 1] === str2[j - 1]) {
      lcs = str1[i - 1] + lcs
      i--
      j--
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      i--
    } else {
      j--
    }
  }
  return { length: dp[m][n], lcs: lcs }
}

// Example usage:
const str1 = "ABCBDAB"
const str2 = "BDCAB"

const result = longestCommonSubsequence(str1, str2)

console.log(`common subsequence for ${str1} and ${str2}`, result)
