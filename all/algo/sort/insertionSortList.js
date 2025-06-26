//  create one list node
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}
function insertionSortList(head) {
  if (!head || !head.next) return head
  const dummyList = new ListNode(0)
  let current = head
  while (current) {
    let prev = dummyList // Pointer to traverse the sorted part, starting from dummy
    let nextUnsorted = current.next // Store the next node from the unsorted list
    // Find the correct position in the sorted list where 'current' should be inserted
    // 'prev.next' is the first node in the sorted list that is greater than 'current.val'
    while (prev.next && prev.next.val < current.val) {
      prev = prev.next
    }
    // Insert 'current' node into the sorted part
    current.next = prev.next // 'current' points to the node it's inserted before
    prev.next = current // 'prev' points to 'current'
    // Move to the next node in the original unsorted list
    current = nextUnsorted
  }
  return dummyList.next // The sorted list starts after the dummy node
}

// Example Usage:
const head = new ListNode(
  5,
  new ListNode(
    2,
    new ListNode(1, new ListNode(6, new ListNode(3, new ListNode(4))))
  )
)
const sortedHead = insertionSortList(head)
console.dir(sortedHead, { depth: null }) // Should be 1 -> 2 -> 3 -> 4 -> 5 -> 6
