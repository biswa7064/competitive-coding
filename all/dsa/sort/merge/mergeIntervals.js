// Metrics:
// Time Complexity: O(n log n) due to sorting
// Space Complexity: O(n) for the result array
function merge(intervals) {
	if (intervals.length === 0) return []
	intervals.sort((a, b) => a[0] - b[0])
	let result = [intervals[0]]
	let last = result[0]
	for (let i = 1; i < intervals.length; i++) {
		let current = intervals[i]
		if (current[0] <= last?.[last?.length - 1]) {
			last[last?.length - 1] = Math.max(
				current[current.length - 1],
				last?.[last?.length - 1]
			)
		} else {
			result.push(current)
			last = current
		}
	}
	return result
}

// Example Usage
console.log(
	merge([
		[1, 3],
		[2, 6],
		[8, 10],
		[15, 18]
	])
) // Output: [[1,6],[8,10],[15,18]]
console.log(
	merge([
		[1, 4],
		[4, 5]
	])
) // Output: [[1,5]]
