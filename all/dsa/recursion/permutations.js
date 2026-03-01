const permutations = (numArr) => {
	if (numArr.length === 0) return [[]]
	let result = []
	function backtrack(start) {
		if (start === numArr.length) {
			result.push([...numArr])
			return
		}
		let ind = start
		while (ind < numArr.length) {
			// swap the current index with the start index
			;[numArr[start], numArr[ind]] = [numArr[ind], numArr[start]]
			// backtrack with the next index
			backtrack(start + 1)
			// swap back to restore the original array
			;[numArr[start], numArr[ind]] = [numArr[ind], numArr[start]]
			ind++
		}
	}
	backtrack(0)
	return result
}

// Example Usage:
console.log(permutations([1, 2, 3])) // OP: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
