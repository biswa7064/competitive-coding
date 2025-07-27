function minPathSum(grid) {
  // length of row and column
  const m = grid.length
  const n = grid[0].length
  //  create a 2d filled with 0
  const dp = Array.from({ length: m }, () => Array(n).fill(0))

  // set the starting point
  dp[0][0] = grid[0][0]

  // fill first row
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j]
  }
  // fill the first column
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0]
  }

  // fill the rest of the dp array
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1])
    }
  }
  console.log({ dp })
  return dp[m - 1][n - 1]
}

// Example Usage
const grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
]
console.log(minPathSum(grid)) // 7

const grid2 = [
  [1, 2, 3],
  [2, 1, 6],
]
console.log(minPathSum(grid2)) // 10
