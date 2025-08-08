/**
 * Generates the first numRows of Pascal's Triangle using dynamic programming.
 * @param {number} numRows The number of rows to generate.
 * @returns {number[][]} A 2D array representing Pascal's Triangle.
 */
// Time Complexity: O(n*2)
// Space Complexity: O(n)

function pascalsTriangle(rows) {
  const result = []
  if (rows === 0) {
    return result
  }
  // push the first row
  result.push([1])
  for (let i = 1; i < rows; i++) {
    // last row from result array
    const prevRow = result[i - 1]
    // create current row array with i+1 elements filled with 1
    const currentRow = new Array(i + 1).fill(1)
    // fill the columns value starting from 1 to one less than current row length
    for (let j = 1; j < i; j++) {
      currentRow[j] = prevRow[j - 1] + prevRow[j]
    }
    // push the current row to the result array
    result.push(currentRow)
  }
  return result
}

// Example usage:
console.log(pascalsTriangle(5))
/*
Output for numRows = 5:
[
  [1],
  [1, 1],
  [1, 2, 1],
  [1, 3, 3, 1],
  [1, 4, 6, 4, 1]
]
*/
