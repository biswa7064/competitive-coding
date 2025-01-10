function maxProduct(numArr) {
  if (numArr.length === 0) return 0

  let maxSoFar = numArr[0],
    minSoFar = numArr[0],
    result = numArr[0]

  for (let i = 1; i < numArr.length; i++) {
    const curr = numArr[i]
    // Swap max and min if the current number is negative
    if (curr < 0) {
      let temp = minSoFar
      minSoFar = maxSoFar
      maxSoFar = temp
    }
    // Update max and min product ending at the current index
    maxSoFar = Math.max(curr, maxSoFar * curr)
    minSoFar = Math.min(curr, minSoFar * curr)
    // Update the result with the maximum product found so far
    result = Math.max(result, maxSoFar)
  }

  return result
}

/*
Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/

console.log(maxProduct([2, 3, -2, 4])) // Output: 6 (subarray: [2, 3])
console.log(maxProduct([-2, 0, -1])) // Output: 0 (subarray: [0])
console.log(maxProduct([-2, 3, -4])) // Output: 24 (subarray: [-2, 3, -4])
