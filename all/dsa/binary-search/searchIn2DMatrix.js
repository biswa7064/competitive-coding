function searchMatrix(matrix, target) {
	if (matrix.length === 0 || matrix[0].length === 0) return false
	let rows = matrix.length,
		cols = matrix[0].length
	let left = 0,
		right = rows * cols - 1 // Total number of elements in the matrix [starting from 0]
	while (left <= right) {
		const mid = Math.floor((left + right) / 2)
		// convert mid to row and col
		// 1D to 2D coordinates
		const row = Math.floor(mid / cols)
		const col = mid % cols
		const midVal = matrix[row][col]
		if (midVal === target) {
			return true
		} else if (target > midVal) {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}
	return false
}

function searchMatrixV2(matrix, target) {
	if (matrix.length === 0 || matrix[0].length === 0) return false
	let rows = matrix.length,
		cols = matrix[0].length
	let r = 0,
		c = cols - 1
	while (r < rows && c >= 0) {
		let key = matrix[r][c]
		if (key === target) {
			return true
		} else if (key > target) {
			c--
		} else {
			r++
		}
	}
	return false
}

// Example Usage
// Complexity: O(log(m * n)), where m is the number of rows and n is the number of columns in the matrix.
const matrix = [
	[1, 3, 5, 7],
	[10, 11, 16, 20],
	[23, 30, 34, 60]
]

console.log(searchMatrix(matrix, 3)) // Output: true
console.log(searchMatrix(matrix, 13)) // Output: false
console.log(searchMatrixV2(matrix, 3)) // Output: true
console.log(searchMatrixV2(matrix, 13)) // Output: false
