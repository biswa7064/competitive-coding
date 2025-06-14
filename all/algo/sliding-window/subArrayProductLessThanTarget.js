function numSubArrayProductLessThanK(numArr, k) {
  if (k <= 0) return 0
  let product = 1,
    left = 0,
    count = 0
  for (let right = 0; right < numArr.length; right++) {
    product *= numArr[right]
    // Shrink the window from the left until the product is less than k
    while (product >= k && left <= right) {
      product /= numArr[left]
      left++
    }
    count += right - left + 1 // Count the number of sub-arrays ending at 'right'
  }
  return count
}

// Example usage:
console.log(numSubArrayProductLessThanK([10, 5, 2, 6], 100))
// Output: 8 (The sub-arrays are [10], [5], [2], [6], [10,5], [5,2], [2,6], [5,2,6])
console.log(numSubArrayProductLessThanK([1, 2, 3], 0))
// Output: 0 (since k <= 1)
