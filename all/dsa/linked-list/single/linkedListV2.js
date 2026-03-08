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
	get(index) {
		if (index < 0 || index > this.size) return null
		let current = this.head
		let counter = 0
		while (counter < index) {
			// set the current to the next node and increment the counter until we reach the index
			current = current.next
			counter++
		}
		return current
	}

	insert(pos, val) {
		if (pos < 0 || pos > this.size) return false
		if (pos === this.size) return !!this.push(val)
		let targetNode = this.get(pos)
		let newNode = new Node(val)
		if (pos === 0) {
			newNode.next = this.head
			this.head = newNode
		} else {
			let prev = this.get(pos - 1)
			newNode.next = targetNode
			prev.next = newNode
		}
		this.size++
		return true
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

	remove(pos) {
		if (pos < 0 || pos >= this.size) return undefined
		if (pos === 0) return this.shift()
		let prev = this.get(pos - 1)
		let removed = prev.next
		prev.next = removed.next
		if ((pos = this.size - 1)) {
			this.tail = prev
			this.tail.next = null
		}
		this.size--
		return removed
	}
}

// Example Usage:
let list = new SingleLinkedList()
list.push(10).push(20).push(30).push(50)
// ------insert------
list.insert(3, 40)
list.insert(0, 5)
console.log(list.get(0).val) // Output: 5
console.log(list.get(4).val) // Output: 40
console.log(list.get(5).val) // Output: 50
console.log(list.size) // Output: 6
// ------remove------
console.log(list.remove(0).val) // Output: 5
console.log(list.get(0).val) // Output: 10
