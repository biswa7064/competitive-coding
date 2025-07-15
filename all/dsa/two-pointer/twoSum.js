// Effective if the input array is sorted
// Time Complexity: O(n)

const twoSum = function (numArr, target) {
  let left = 0,
    right = numArr.length - 1,
    result = []
  while (left < right) {
    const sum = numArr[left] + numArr[right]
    if (sum === target) {
      result.push([numArr[left], numArr[right]])
      left++
      right--
    } else if (sum < target) {
      left++
    } else {
      right--
    }
  }
  return result
}

// Example Usage:
const arr1 = [2, 3, 4, 5, 6, 7]
const target1 = 9
console.log(`Two numbers that add up to ${target1}:`, twoSum(arr1, target1)) // Output: [2, 7]
