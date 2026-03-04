class Node {
	constructor(val) {
		this.val = val
		this.next = null
	}
}

class SingleLinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.size = 0
	}

	push(val) {
		let newNode = new Node(val)
		if (!this.head) {
			this.head = newNode
			this.tail = newNode
		} else {
			this.tail.next = newNode
			this.tail = newNode
		}
		this.size++
		return this
	}
}

// Example Usage:
let list = new SingleLinkedList()
list.push(1)
list.push(2)
list.push(3)
console.log(list.head.val) // Output: 1
console.log(list.head.next.val) // Output: 2
console.log(list.tail.val) // Output: 3
console.log(list.size) // Output: 3
