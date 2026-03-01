function subsetOfNumbers(numArr) {
	if (numArr.length === 0) return [[]]
	let result = []
	function backtrack(start, current) {
		if (start === numArr.length) {
			result.unshift(current.slice())
			return
		}
		// include the current number
		current.push(numArr[start])
		backtrack(start + 1, current)
		current.pop() // backtrack
		//exclude the current number
		backtrack(start + 1, current)
	}
	backtrack(0, [])
	return result
}

// Example usage:
const numbers = [1, 2, 3]
console.log(subsetOfNumbers(numbers))
// Output: [ [], [ 3 ], [ 2 ], [ 2, 3 ], [ 1 ], [ 1, 3 ], [ 1, 2 ], [ 1, 2, 3 ] ]
