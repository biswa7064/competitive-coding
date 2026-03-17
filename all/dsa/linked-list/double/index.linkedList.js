class ListNode {
	constructor(val) {
		this.val = val
		this.prev = null
		this.next = null
	}
}
class DoubleLinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.length = 0
	}

	push(val) {
		const newNode = new ListNode(val)
		if (!this.head || this.length === 0) {
			this.head = newNode
			this.tail = newNode
		} else {
			this.tail.next = newNode
			newNode.prev = this.tail
			this.tail = newNode
		}
		this.length++
	}
}

// Example Usage:
let list = new DoubleLinkedList()
list.push(10)
list.push(20)
console.log(list)
