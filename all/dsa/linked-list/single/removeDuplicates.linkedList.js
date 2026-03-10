class ListNode {
	val
	next
	constructor(val, next) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}

function deleteDuplicates(head) {
	let current = head
	while (current?.next) {
		if (current?.val === current?.next?.val) {
			current.next = current.next.next
		} else {
			current = current.next
		}
	}
	return head
}

// Example Usage:
const head = new ListNode(
	1,
	new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3))))
)
const result = deleteDuplicates(head)
console.log(result) // The resulting linked list will be: 1 -> 2 -> 3
