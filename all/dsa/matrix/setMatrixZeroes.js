// Given m*n matrix, if an element is 0, set its entire row and column to 0.
//  Time Complexity: O(m*n)
// Space Complexity: O(m+n) for storing zero rows and columns
function setMatrixZeroes(matrix) {
  const rows = matrix.length
  const cols = matrix[0].length
  const zeroRows = new Set()
  const zeroCols = new Set()

  // First pass to find all the rows and columns that need to be zeroed.
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        zeroRows.add(i)
        zeroCols.add(j)
      }
    }
  }

  // Second pass to set the rows and columns to zero
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (zeroRows.has(i) || zeroCols.has(j)) {
        matrix[i][j] = 0
      }
    }
  }
}

// Example:
// Test case 1
let matrix1 = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]
console.log("Original matrix:")
console.log(matrix1)

setMatrixZeroes(matrix1)

console.log("After setMatrixZeroes:")
console.log(matrix1)
// Expected: [[1,0,1],[0,0,0],[1,0,1]]

// Test case 2
let matrix2 = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
]

console.log("Original matrix:")
console.log(matrix2)

setMatrixZeroes(matrix2)

console.log("After setMatrixZeroes:")
console.log(matrix2)
// Expected: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
