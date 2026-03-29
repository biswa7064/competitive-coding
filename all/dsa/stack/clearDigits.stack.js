function clearDigits(s) {
	const st = []
	for (let i = 0; i < s.length; i++) {
		let curr = s[i]
		if (!isNaN(+curr)) {
			if (st.length !== 0 && !isNaN(+curr)) {
				st.pop()
			}
		} else {
			st.push(curr)
		}
	}
	return st.join("")
}
// Metrics:
// Time Complexity: O(n) where n is the length of the input string s
// Space Complexity: O(n) in the worst case when there are no digits in the string

// Example Usage
console.log(clearDigits("abc123")) // Output: ""
console.log(clearDigits("abc")) // Output: "abc"
console.log(clearDigits("1a2b3c")) // Output: "c"
