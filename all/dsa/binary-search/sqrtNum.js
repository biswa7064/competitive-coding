/*
TIme Complexity: O(log n) as we are halving the search space in each iteration of the binary search.
Space Complexity: O(1) as we are using only constant space to store the variables.
*/
const sqrtNum = (num) => {
	if (num < 2) return num
	let left = 0,
		right = Math.floor(num / 2),
		ans = 0
	while (left <= right) {
		let mid = Math.floor((left + right) / 2)
		let sqr = mid * mid
		if (sqr <= num) {
			left = mid + 1
			ans = mid
		} else {
			right = mid - 1
		}
	}
	return ans
}

// Example Usage
console.log(sqrtNum(4)) // Output: 2
console.log(sqrtNum(8)) // Output: 2 after rounding down to the nearest integer
console.log(sqrtNum(16)) // Output: 4
console.log(sqrtNum(25)) // Output: 5
console.log(sqrtNum(26)) // Output: 5 after rounding down to the nearest integer
