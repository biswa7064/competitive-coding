function maxSumSubarrayOfSizeK(arr, k) {
  if (k > arr.length) return null
  let currentWindowSum = 0,
    maxSum = 0,
    start = 0

  // Initial window sum
  while (start < k) {
    currentWindowSum += arr[start]
    start++
  }
  // Set maxSum to initial window sum
  // reset start variable
  maxSum = currentWindowSum
  start = 0
  // Slide the window
  while (start + k < arr.length) {
    currentWindowSum = currentWindowSum - arr[start] + arr[start + k]
    maxSum = Math.max(maxSum, currentWindowSum)
    start++
  }
  return maxSum
}

// Example Usage:
const arr1 = [2, 1, 5, 1, 3, 2]
const k1 = 3
console.log(
  `Maximum sum subarray of size ${k1}: ${maxSumSubarrayOfSizeK(arr1, k1)}`
) // Output: 9 (from [5, 1, 3])

const arr2 = [2, 3, 4, 1, 5]
const k2 = 2
console.log(
  `Maximum sum subarray of size ${k2}: ${maxSumSubarrayOfSizeK(arr2, k2)}`
) // Output: 7 (from [3, 4])
