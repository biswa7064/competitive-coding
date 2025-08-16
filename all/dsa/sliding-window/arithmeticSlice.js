/*
An integer array is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.
*/
// Time Complexity: O(n)
// Space Complexity: O(1)
function numberOfArithmeticSlices(numArr) {
  if (numArr.length < 3) return 0
  let count = 0,
    left = 0,
    total = 0
  for (let right = 2; right < numArr.length; right++) {
    const isValidDiff =
      numArr[right] - numArr[right - 1] === numArr[right - 1] - numArr[left]
    if (isValidDiff) {
      count += 1
      total += count
    } else {
      count = 0
    }
    left = right - 1
  }
  return total
}

// Example Usage
console.log(numberOfArithmeticSlices([1, 2, 3, 4])) // 3 as we have three valid slices - [1,2,3], [2,3,4], [1,2,3,4]
console.log(numberOfArithmeticSlices([1])) // 0
