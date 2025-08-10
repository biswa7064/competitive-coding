//Time Complexity: O(n) - We pass through the array only once after calculating the initial window sum.
//Space Complexity: O(1) - We use a constant amount of extra space.
function findMaxAverage(numArr, k) {
  // Calculate the initial sum of the first window
  let currentWindowSum = 0
  for (let i = 0; i < k; i++) {
    currentWindowSum += numArr[i]
  }
  let maxSum = currentWindowSum // store currentWindowSum as maxSum
  let startFromK = k
  // Slide the window from the beginning to the end
  while (startFromK < numArr.length) {
    // Subtract the element leaving the window (left side)
    // Add the new element entering the window (right side)
    currentWindowSum += numArr[startFromK] - numArr[startFromK - k]
    // Update the maximum sum if needed
    maxSum = Math.max(maxSum, currentWindowSum)
    startFromK++
  }
  return maxSum / k
}

// Example Usage:
const arr1 = [1, 12, -5, -6, 50, 3]
const k1 = 4
console.log(findMaxAverage(arr1, k1)) // Output: 12.75 (from [12, -5, -6, 50])

const arr2 = [5]
const k2 = 1
console.log(findMaxAverage(arr2, k2)) // Output: 5 (from [5])
