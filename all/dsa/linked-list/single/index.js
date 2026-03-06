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

	pop() {
		if (!this.head) return undefined
		let current = this.head
		let newTail = current

		while (current.next) {
			newTail = current
			current = current.next
		}
		this.tail = newTail
		this.tail.next = null
		this.size--
		return current
	}

	shift() {
		if (!this.head) return undefined
		let currentHead = this.head
		this.head = currentHead.next
		this.size--
		if (this.size === 0) {
			this.tail = null
		}
		return currentHead
	}

	unshift(val) {
		let newNode = new Node(val)
		if (!this.head) {
			this.head = newNode
			this.tail = this.head
		}
		newNode.next = this.head
		this.head = newNode
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
list.pop()
console.log(list.tail.val) // Output: 2
console.log(list.size) // Output: 2
list.shift()
console.log(list.head.val) // Output: 2
console.log(list.size) // Output: 1
list.unshift(5)
console.log(list.head.val) // Output: 5
console.log(list.size) // Output: 2
list.unshift(10)
console.log(list.head.val) // Output: 10
console.log(list.size) // Output: 3
console.log(`List is: ${JSON.stringify(list)}`) // output: List is: {"head":{"val":10,"next":{"val":5,"next":{"val":2,"next":null}}},"tail":{"val":2,"next":null},"size":3}
