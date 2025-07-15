function removeNthNodeFromEnd(head, pos) {
  if (!head) return null
  let fast = head,
    slow = head
  // Move fast n nodes ahead
  for (let i = 0; i < pos; i++) {
    if (!fast) return head // pos is larger than the list length, no removal necessary.
    fast = fast.next
  }
  // If fast is null, it means we need to remove the head node
  if (!fast) {
    return head.next
  }
  // Move both pointers until fast reaches the end
  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }
  // Remove the nth node from the end
  slow.next = slow.next.next
  return head
}

class ListNode {
  val
  next
  constructor(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

const head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
)

const result = removeNthNodeFromEnd(head, 5)
console.log("After remove Nth node from the end", JSON.stringify(result)) // [1,2,3,5]
