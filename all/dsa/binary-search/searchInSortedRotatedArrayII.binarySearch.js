function search(numArr, target) {
	let left = 0,
		right = numArr.length - 1
	while (left <= right) {
		let mid = Math.floor((left + right) / 2)
		if (numArr[mid] === target) return true
		// handle duplicates, we can not determine which side is sorted, just move left and right pointer
		if (numArr[left] === numArr[mid] && numArr[mid] === numArr[right]) {
			left++
			right--
			continue
		}
		if (numArr[left] <= numArr[mid]) {
			// left side is sorted
			if (numArr[left] <= target && target < numArr[mid]) {
				right = mid - 1
			} else {
				left = mid + 1
			}
		} else {
			// right side is sorted
			if (numArr[right] >= target && target > numArr[mid]) {
				left = mid + 1
			} else {
				right = mid - 1
			}
		}
	}
	return false
}
// Metrics:
// Time Complexity: O(log n) in the best case, O(n) in the worst case due to duplicates
// Space Complexity: O(1)

// Example usage:
const numArr = [2, 5, 6, 0, 0, 1, 2]
const target = 0
console.log(search(numArr, target)) // Output: true

const target2 = 3
console.log(search(numArr, target2)) // Output: false
