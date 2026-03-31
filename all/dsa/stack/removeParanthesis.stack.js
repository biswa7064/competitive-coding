function removeOuterParentheses(s) {
	let stack = [],
		result = ""
	for (let ch of s) {
		if (ch === "(") {
			if (stack.length !== 0) {
				result += ch
			}
			stack.push(1) // minimal use of memory, we just need to push any value to indicate an opening parenthesis
		} else if (ch === ")") {
			stack.pop()
			if (stack.length !== 0) {
				result += ch
			}
		}
	}
	return result
}

// Method 2: Using a counter instead of a stack
function removeOuterParenthesesV2(s) {
	let counter = 0,
		result = ""
	for (let ch of s) {
		if (ch === "(") {
			if (counter > 0) {
				result += ch
			}
			counter += 1
		} else if (ch === ")") {
			counter -= 1
			if (counter > 0) {
				result += ch
			}
		}
	}
	return result
}

// Metrics:
// Time Complexity: O(n) for iterating through the string
// Space Complexity: O(n) in the worst case if all characters are opening parentheses, otherwise O(1) for the stack and result string.

// Example Usage
console.log(removeOuterParentheses("(()())(())")) // Output: "()()()"
console.log(removeOuterParentheses("(()())(())(()(()))")) // Output: "()()()()(())"
console.log(removeOuterParentheses("()()")) // Output: ""

console.log(removeOuterParenthesesV2("(()())(())")) // Output: "()()()"
console.log(removeOuterParenthesesV2("(()())(())(()(()))")) // Output: "()()()()(())"
console.log(removeOuterParenthesesV2("()()")) // Output: ""
