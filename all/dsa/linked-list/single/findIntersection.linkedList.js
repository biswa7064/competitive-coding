class ListNode {
	val
	next
	constructor(val, next) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}

function findIntersection(headA, headB) {
	if (!headA || !headB) return null
	let pA = headA,
		pB = headB
	while (pA !== pB) {
		pA = !pA ? headB : pA.next
		pB = !pB ? headA : pB.next
	}
	return pA
}
// Metrics
// Time Complexity: O(m + n) where m and n are the lengths of the two linked lists
// Space Complexity: O(1) since we are using only a constant amount of extra space

// Example Usage:
let common = new ListNode(3)
let listA = new ListNode(1)
listA.next = new ListNode(2)
listA.next.next = common
listA.next.next.next = new ListNode(6)
let listB = new ListNode(3)
listB.next = new ListNode(5)
listB.next.next = common
listB.next.next.next = new ListNode(9)
let intersectionNode = findIntersection(listA, listB)
console.log(intersectionNode.val) // Output: 3
