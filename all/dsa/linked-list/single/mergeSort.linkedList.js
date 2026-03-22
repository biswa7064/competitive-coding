class ListNode {
	val
	next
	constructor(val, next) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}
function findMid(head) {
	if (!head || !head.next) return head
	let fast = head,
		slow = head
	while (fast.next && fast.next.next) {
		slow = slow.next
		fast = fast.next.next
	}
	return slow
}

function mergeList(left, right) {
	if (left === null) return right
	if (right === null) return left
	let head = null
	// Initialize head to the smaller of the two lists
	if (left.val <= right.val) {
		head = left
		left = left.next
	} else {
		head = right
		right = right.next
	}
	let curr = head
	// Merge the two lists by comparing their current nodes and attaching the smaller one to the merged list
	while (left && right) {
		if (left.val <= right?.val) {
			curr.next = left
			left = left.next
		} else {
			curr.next = right
			right = right?.next
		}
		curr = curr.next
	}
	curr.next = left ? left : right
	return head
}

function sortList(head) {
	if (!head || !head.next) return head
	let curr = head
	let mid = findMid(curr)
	let nextToMid = mid.next
	mid.next = null
	const left = sortList(head)
	const right = sortList(nextToMid)
	const sortedList = mergeList(left, right)
	return sortedList
}

// Metrics
// Time Complexity: O(n log n) - The merge sort algorithm divides the list into halves log n times and merges them back together in O(n) time.
// Space Complexity: O(1) - We are merging the lists in place without using any additional data structures, so the space complexity is constant.

// Example Usage:
const head = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3))))
const sortedHead = sortList(head)
console.log(`Sorted linked list: ${JSON.stringify(sortedHead)}`) // The resulting linked list will be: 1 -> 2 -> 3 -> 4
