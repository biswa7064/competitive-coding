class ListNode {
	val
	next
	constructor(val, next) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}

function rotateRight(head, k) {
	if (!head || !head.next || k === 0) return head
	let len = 1,
		tail = head
	while (tail.next) {
		tail = tail.next
		len += 1
	}

	tail.next = head
	k = k % len // number of rotations needed
	// If k is 0 after modulo, it means the list will remain unchanged after rotation
	if (k === 0) {
		tail.next = null
		return head
	}
	// Find the new tail position, which is (len - k) steps from the head
	let newTailPos = len - k
	let newTail = head
	// greater than 1 because we want to stop at the new tail, which is the (len - k)th node
	while (newTailPos > 1) {
		newTail = newTail.next
		newTailPos--
	}
	let newHead = newTail.next
	newTail.next = null
	return newHead
}

// Metrics:
// Time Complexity: O(n) for traversing the list to find its length and then to find the new tail position.
// Space Complexity: O(1) since we are using only a constant amount of extra space.

// Example Usage
let head = new ListNode(
	1,
	new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
)
console.log(rotateRight(head, 2)) // Output: 4 -> 5 -> 1 -> 2 -> 3

let head2 = new ListNode(
	0,
	new ListNode(1, new ListNode(2, new ListNode(3, null)))
)
console.log(rotateRight(head2, 10)) // Output: 2 -> 3 -> 0 -> 1
