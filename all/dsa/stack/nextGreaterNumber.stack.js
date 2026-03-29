function nextGreaterElement(numArr1, numArr2) {
	const st = []
	const cntMap = new Map()
	for (let i = numArr2.length - 1; i >= 0; i--) {
		let current = numArr2[i]
		while (st.length !== 0 && st[st.length - 1] <= current) {
			st.pop()
		}
		if (st.length === 0) {
			cntMap.set(current, -1)
		} else {
			cntMap.set(current, st[st.length - 1])
		}
		st.push(current)
	}
	let result = []
	for (let i = 0; i < numArr1.length; i++) {
		result[i] = cntMap.get(numArr1[i])
	}
	return result
}

// Metrics
// Time Complexity: O(n + m) where n is the length of numArr1 and m is the length of numArr2
// Space Complexity: O(m) for the stack and the map

// Example Usage
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])) // Output: [-1, 3, -1]
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4])) // Output: [3, -1]
