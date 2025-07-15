/*
Q - Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
*/
function sortColors(numArr) {
  let left = 0,
    right = numArr.length - 1,
    current = 0
  while (current <= right) {
    if (numArr[current] === 0) {
      ;[numArr[current], numArr[left]] = [numArr[left], numArr[current]]
      left++
      current++
    } else if (numArr[current] === 2) {
      ;[numArr[current], numArr[right]] = [numArr[right], numArr[current]]
      right--
    } else {
      current++
    }
  }
  return numArr
}

// Example usage:
console.log(sortColors([2, 0, 2, 1, 1, 0])) // Output: [0, 0, 1, 1, 2, 2]
console.log(sortColors([2, 0, 1])) // Output: [0, 1, 2]
