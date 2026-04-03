function bs(numArr, key, low, high) {
	while (low <= high) {
		let mid = Math.floor(low + (high - low) / 2)
		if (numArr[mid] === key) {
			return mid
		} else if (numArr[mid] < key) {
			low = mid + 1
		} else {
			high = mid - 1
		}
	}
	return -1
}
function twoSum(numbers, target) {
	let i = 0
	while (i <= numbers.length - 2) {
		let com = target - numbers[i]
		let index = bs(numbers, com, i + 1, numbers.length - 1)
		if (index !== -1) {
			return [i + 1, index + 1]
		}
		i++
	}
	return [-1, -1]
}

// Metrics:
// Time Complexity: O(n log n) because we are iterating through the array once (O(n)) and for each element, we are performing a binary search (O(log n)).
// Space Complexity: O(1) since we are using only a constant amount of extra space.

// Example Usage
console.log(twoSum([2, 7, 11, 15], 9)) // Output: [1, 2]
console.log(twoSum([1, 2, 3, 4, 4], 8)) // Output: [4, 5]
console.log(twoSum([-1, 0], -1)) // Output: [1, 2]
console.log(twoSum([1, 2, 3], 7)) // Output: [-1, -1]
