function printSpiral(matrix) {
  const result = []
  if (matrix.length === 0 || matrix[0].length === 0) return result
  const rows = matrix.length
  const cols = matrix[0].length
  // declare 4 pointers - top, bottom, left and right
  let top = 0,
    right = cols - 1,
    bottom = rows - 1,
    left = 0
  while (top <= bottom && left <= right) {
    // traverse from left to right
    for (let i = top; i <= right; i++) {
      result.push(matrix[top][i])
    }
    top++ // move the top pointer down
    // traverse from top to bottom
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right])
    }
    right-- // move the pointer left
    //  traverse from right to left
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i])
      }
      bottom-- // move pointer up
    }
    // traverse from bottom to top
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left])
      }
      left++ // move pointer right
    }
    console.log({ top, right, bottom, left }) // Debugging pointers
  }
  return result
}

//  Example Usage
const mat1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]
console.log(printSpiral(mat1)) // [1,2,3,4,8,12,11,10,9,5,6,7]
