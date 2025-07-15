function findSingleElementInArray(arr) {
  if (arr.length === 0) return null
  if (arr.length === 1) return arr[0]
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    // Check if mid is even or odd
    if (mid % 2 === 1) {
      mid--
    }
    // Check if the mid element is equal to the next element
    if (arr[mid] === arr[mid + 1]) {
      left = mid + 2 // Move to the right side
    } else {
      right = mid // Move to the left side
    }
  }
  // The single element is at the left pointer
  return arr[left]
}

// Example usage:
console.log(findSingleElementInArray([1, 1, 2, 3, 3, 4, 4, 8, 8])) // Output: 2
console.log(findSingleElementInArray([3, 3, 7, 7, 10, 11, 11])) // Output: 10
console.log(findSingleElementInArray([1, 1, 2, 2, 3])) // Output: 3
console.log(findSingleElementInArray([2, 3, 3, 4, 4])) // Output: 2
