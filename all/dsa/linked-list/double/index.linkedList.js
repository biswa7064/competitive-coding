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
		return this
	}

	pop() {
		if (!this.head || this.length === 0) return undefined
		const lastNode = this.tail
		if (this.length === 1) {
			this.head = null
			this.tail = null
		} else {
			this.tail = lastNode.prev
			this.tail.next = null
			lastNode.prev = null
		}
		this.length--
		return lastNode
	}
}

// Example Usage:
let list = new DoubleLinkedList()
list.push(10)
list.push(20)
list.push(30)
// after pushing 10, 20, 30, the list looks like this:
console.log(list)
console.log(list.pop()) //  ListNode { val: 30, prev: ListNode { val: 20, prev: [ListNode], next: [Circular] }, next: null }
// after popping the last element, the list looks like this:
console.log("After popping: ", list)
