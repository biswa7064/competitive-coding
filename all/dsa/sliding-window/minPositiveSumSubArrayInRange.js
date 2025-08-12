function minimumSumSubarray(numArr, l, r) {
  let minSum = Infinity,
    left = 0,
    currentSum = 0
  for (let right = 0; right < numArr.length; right++) {
    currentSum += numArr[right]
    // Ensure the window size doesn't exceed range r
    // if exceed then remove item from left
    if (right - left + 1 > r) {
      currentSum -= numArr[left]
      left++
    }

    let tempSum = currentSum // Initialize temporary sum
    let tempLeft = left // Initialize temporary left pointer
    // Check if the current window size is at least l
    while (right - tempLeft + 1 >= l) {
      if (tempSum > 0) {
        minSum = Math.min(minSum, tempSum)
      }
      tempSum -= numArr[tempLeft]
      tempLeft++
    }
  }
  return minSum !== Infinity ? minSum : -1
}

// Example Usage
console.log(minimumSumSubarray([3, -2, 1, 4], 2, 3)) // Output: 1
console.log(minimumSumSubarray([-2, 2, -3, 1], 2, 3)) // Output: -1
console.log(minimumSumSubarray([1, 2, 3, 4], 2, 4)) // Output: 3
