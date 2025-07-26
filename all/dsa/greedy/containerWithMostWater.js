// Time Complexity: O(n)
// Space Complexity: O(1)
function maxArea(height) {
  let left = 0,
    right = height.length - 1,
    maxArea = 0
  while (left < right) {
    const currentH = Math.min(height[left], height[right]) // minimum height as the height
    const currentW = right - left // width calculate based on the index from right to left
    const currentArea = currentH * currentW // current area using current height and width
    maxArea = Math.max(maxArea, currentArea) // compare current and initial area
    // move pointers for left and right like
    // if left is small then left++
    // if right is small then right--
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }
  return maxArea
}

// Example Usage
const inputHeights = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(maxArea(inputHeights)) // 49

const inputHeights1 = [1, 1]
console.log(maxArea(inputHeights1)) // 1
