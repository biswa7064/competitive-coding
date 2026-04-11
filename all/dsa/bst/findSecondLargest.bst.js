class Node {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}
}

function findLargestLeft(node) {
	while (node.right) {
		node = node.right
	}
	return node.value
}

class BinarySearchTree {
	constructor() {
		this.root = null
	}

	insert(value) {
		// only accept numbers....watch out since NaN is typeof number!
		if (typeof value === "number" && !isNaN(value)) {
			// if there is nothing in the tree, start it off with a new node!
			if (this.root === null) {
				this.root = new Node(value)
				return this
			} else {
				// current variable used for traversal, just like linked lists!
				var current = this.root
				// keep looping till we get to the correct spot;
				while (true) {
					if (value < current.value) {
						// if there is nothing on the left
						if (current.left === null) {
							// make a new node and get out
							current.left = new Node(value)
							return this
						}
						// otherwise, keep moving on!
						else {
							current = current.left
						}
					} else if (value > current.value) {
						// if there is nothing on the right
						if (current.right === null) {
							// make a new node and get out
							current.right = new Node(value)
							return this
						} else {
							current = current.right
						}
					}
					// otherwise it must be a duplicate so let's get out of here
					else {
						return "duplicate!"
					}
				}
			}
		} else return "Please insert a number"
	}

	findSecondLargest() {
		if (!this.root || (!this.root.right && !this.root.left)) return undefined
		let current = this.root,
			parentOfCurrent = null
		while (current.right) {
			parentOfCurrent = current
			current = current.right
		}
		// If the largest node has a left subtree, the second largest is the largest node in that subtree
		if (current.left) {
			return findLargestLeft(current.left)
		}
		// Otherwise, the second largest is the parent of the largest node
		return parentOfCurrent.value
	}
}

// Metrics
// Time Complexity: O(h) where h is the height of the tree. In the worst case (skewed tree), this can be O(n).
// Space Complexity: O(1) if we ignore the recursive stack space used by findLargestLeft. If we consider it, then it's O(h) due to recursion stack in the worst case.

// Example Usage:
const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(12)
bst.insert(20)
console.log(bst.findSecondLargest()) // Output: 15
