class ListNode {
	val
	next
	constructor(val, next) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}
function revList(node) {
	let prev = null
	let current = node
	while (current) {
		let nextNode = current.next
		current.next = prev
		prev = current
		current = nextNode
	}
	return prev
}

function isPalindrome(head) {
	if (!head || !head.next) return true
	let fast = head,
		slow = head
	// find the middle of the list using fast and slow pointers
	while (fast.next && fast.next.next) {
		slow = slow.next
		fast = fast.next.next
	}
	let secondHalf = revList(slow)
	let firstHalf = head
	let secondHalfCpy = secondHalf // to restore the list later

	while (secondHalf.next) {
		if (firstHalf.val !== secondHalf.val) {
			// restore the list before returning false
			revList(secondHalfCpy)
			return false
		}
		firstHalf = firstHalf.next
		secondHalf = secondHalf.next
	}
	return true
}

// Metrics:
// Time Complexity: O(n) - We traverse the list a few times (to find the middle, reverse the second half, and compare), but each traversal is O(n).
// Space Complexity: O(1) - We use a constant amount of extra space for pointers and temporary variables, regardless of the input size.

// Example Usage
const node1 = new ListNode(1)
node1.next = new ListNode(2)
node1.next.next = new ListNode(2)
node1.next.next.next = new ListNode(1)
console.log(isPalindrome(node1)) // Output: true
const node2 = new ListNode(1)
node2.next = new ListNode(2)
console.log(isPalindrome(node2)) // Output: false
