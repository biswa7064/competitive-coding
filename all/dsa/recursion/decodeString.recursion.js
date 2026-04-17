const decodeString = (s) => {
	let ind = 0
	function helper(str, idx) {
		let result = "",
			num = 0
		while (idx < str.length) {
			let char = str[idx]
			if (char >= "0" && char <= "9") {
				num = num * 10 + parseInt(char) // Handle multi-digit numbers
			} else if (char === "[") {
				let [decodedString, newIdx] = helper(str, idx + 1) // skip the opening bracket
				result += decodedString.repeat(num)
				num = 0
				idx = newIdx
			} else if (char === "]") {
				return [result, idx]
			} else {
				result += char
			}
			idx += 1
		}
		return [result, idx]
	}
	return helper(s, ind)[0]
}

// Metrics:
// Time Complexity: O(n * k) where n is the length of the input string and k is the maximum number of repetitions.
// Space Complexity: O(m) where m is the maximum depth of nested brackets.

// Example usage:
console.log(decodeString("3[a]2[bc]")) // Output: "aaabcbc"
console.log(decodeString("3[a2[c]]")) // Output: "accaccacc"
console.log(decodeString("2[abc]3[cd]ef")) // Output: "abcabccdcdcdef"
