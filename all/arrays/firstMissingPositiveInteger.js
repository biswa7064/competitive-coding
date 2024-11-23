function firstMissingPositive(nums) {
  // swap numbers
  // so that they will be in the correct position
  for (let i = 0; i < nums.length; i++) {
    while (
      nums[i] > 0 &&
      nums[i] <= nums.length &&
      nums[nums[i] - 1] !== nums[i]
    ) {
      let temp = nums[nums[i] - 1]
      nums[nums[i] - 1] = nums[i]
      nums[i] = temp
    }
  }
  // check the missing number
  // missing number should be start+1
  let start = 0,
    result = 0
  while (start < nums.length) {
    if (nums[start] !== start + 1 && !result) {
      result = start + 1
    }
    if (result) break
    start++
  }
  return result
}

/*
Example 1:

Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.
Example 2:

Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.
Example 3:

Input: nums = [7,8,9,11,12]
Output: 1
Explanation: The smallest positive integer 1 is missing.
 */
console.log(firstMissingPositive([1, 2, 0])) // OP: 3
console.log(firstMissingPositive([3, 4, -1, 1])) // OP: 2
console.log(firstMissingPositive([7, 8, 9, 11, 12])) // OP: 1
console.log(firstMissingPositive([-2, -1, 2, 1, 3, 17, 8, 9])) // OP: 4
