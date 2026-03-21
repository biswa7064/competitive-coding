class Node {
	constructor(val) {
		this.val = val
		this.prev = null
		this.next = null
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.length = 0
	}
	push(val) {
		var node = new Node(val)
		if (this.head === null) {
			this.head = node
			this.tail = this.head
			this.length++
		} else {
			this.tail.next = node
			node.prev = this.tail
			this.tail = node
			this.length++
		}
		return this
	}
	reverse() {
		if (!this.head || !this.head.next) return this
		let curr = this.head,
			temp = null
		while (curr) {
			temp = curr.prev
			curr.prev = curr.next
			curr.next = temp
			curr = curr.prev
		}
		if (temp !== null) {
			this.head = temp.prev
		}
		return this
	}
}

// Example Usage:
let doublyLinkedList = new DoublyLinkedList()
doublyLinkedList.push(5).push(10).push(15).push(20)
doublyLinkedList.reverse() // singlyLinkedList;
console.log(doublyLinkedList.length) // 4
console.log(doublyLinkedList.head.val) // 20
console.log(doublyLinkedList.head.next.val) // 15
console.log(doublyLinkedList.head.next.next.val) // 10
console.log(doublyLinkedList.head.next.next.next.val) // 5
