/*
Given an integer array of numbers and an integer k, return true if there are two distinct indices i and j in the array such that numArr[i] == numArr[j] and abs(i - j) <= k.
*/

// Time Complexity: O(n) for iterating through the array and O(k) for maintaining the set size
// Space Complexity: O(k) for the set with fixed size at most k elements
function containsNearbyDuplicate(numArr, k) {
  const numSet = new Set()
  for (let i = 0; i < numArr.length; i++) {
    // if the current number is already in the set, like within the last k elements, return true
    if (numSet.has(numArr[i])) {
      return true
    }
    // add current item to the set
    numSet.add(numArr[i])
    // if set size exceeds k, remove the last item from the set
    if (numSet.size > k) {
      numSet.delete(numArr[i - k])
    }
  }
  return false
}

// Example Usage:
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)) // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)) // true
console.log(containsNearbyDuplicate([1, 2, 3, 4], 2)) // false
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)) // false
