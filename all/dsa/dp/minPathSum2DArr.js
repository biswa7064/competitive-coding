function minPathSum(grid) {
  // length of row and column
  const row = grid.length
  const col = grid[0].length

  // fill first row
  for (let j = 1; j < col; j++) {
    grid[0][j] += grid[0][j - 1]
  }
  // fill the first column
  for (let i = 1; i < row; i++) {
    grid[i][0] += grid[i - 1][0]
  }

  // fill the rest of the dp array
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1])
    }
  }
  return grid[row - 1][col - 1]
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
