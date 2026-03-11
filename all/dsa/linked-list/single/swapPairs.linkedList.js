class ListNode {
	val
	next
	constructor(val, next) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}

function swapPairs(head) {
	if (!head || !head?.next) return head
	let dummyNode = new ListNode(0, head)
	let prev = dummyNode
	while (prev?.next && prev?.next?.next) {
		let fNode = prev?.next,
			sNode = prev?.next?.next
		// swap
		fNode.next = sNode?.next
		sNode.next = fNode
		prev.next = sNode
		// move the prev to the next pair by moving it 2 nodes ahead
		// fNode is now in the second position after the swap, so we can move prev to fNode to prepare for the next swap
		prev = fNode
	}
	return dummyNode.next
}

// Example Usage:
const head = new ListNode(
	1,
	new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
)
const result = swapPairs(head)
console.log(`After swapping pairs: ${JSON.stringify(result)}`) // The resulting linked list will be: 2 -> 1 -> 4 -> 3 -> 5
