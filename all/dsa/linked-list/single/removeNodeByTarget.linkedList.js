class ListNode {
	val
	next
	constructor(val, next) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}

function removeElements(head, val) {
	let dummy = new ListNode(0, head) // dummy node to handle edge cases where head needs to be removed
	let current = dummy
	while (current?.next) {
		// As current.val is not used in the comparison, we can directly check current.next.val
		if (current?.next?.val === val) {
			current.next = current.next?.next // Skip the node with the target value
		} else {
			current = current.next // Move to the next node if the current node's value does not match the target value
		}
	}
	return dummy.next // Return the head of the modified linked list, which is the next node of the dummy node
}

// Example Usage:
const head = new ListNode(
	1,
	new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
)
console.log(`INPUT: ${JSON.stringify(head)}`)
const result = removeElements(head, 3)
console.log(`After removal by target value 3: ${JSON.stringify(result)}`) // The resulting linked list will be: 1 -> 2 -> 4 -> 5
