// Time Complexity: O(m*n) for traversing the matrix twice.
// Space Complexity: O(m+n) for storing the rows and columns that need to be zeroed.
function setZeroes(matrix) {
  const rows = new Set()
  const cols = new Set()
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i)
        cols.add(j)
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (rows.has(i) || cols.has(j)) {
        matrix[i][j] = 0
      }
    }
  }
  return matrix
}

// Example Usage
const matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]
console.log(setZeroes(matrix)) // [[1,0,1],[0,0,0],[1,0,1]]

const matrix2 = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
]

console.log(setZeroes(matrix2)) // [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
