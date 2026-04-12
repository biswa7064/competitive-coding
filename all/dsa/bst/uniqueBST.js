class TreeNode {
	constructor(val, left, right) {
		this.val = val === undefined ? 0 : val
		this.left = left === undefined ? null : left
		this.right = right === undefined ? null : right
	}
}

function build(start, end) {
	let result = []

	if (start > end) {
		result.push(null)
		return result
	}

	for (let root = start; root <= end; root++) {
		let leftTree = build(start, root - 1)
		let rightTree = build(root + 1, end)

		for (let lNode of leftTree) {
			for (let rNode of rightTree) {
				let r = new TreeNode(root)
				r.left = lNode
				r.right = rNode
				result.push(r)
			}
		}
	}

	return result
}

function generateTrees(n) {
	if (n === 0) return []
	return build(1, n)
}

// Metrics:
// Time Complexity: O(4^n / n^(3/2)) - Catalan number
// Space Complexity: O(4^n / n^(3/2)) - Catalan number

// Example usage:
console.log(generateTrees(3)) // [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
console.log(generateTrees(1)) // [[1]]
