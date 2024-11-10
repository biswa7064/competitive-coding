/*
*Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

*Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1

*Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 */
function searchInsert(nums, target) {
  let start = 0,
    end = nums.length - 1
  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return start
}
const test1 = {
  input: [1, 3, 5, 6],
  target: 5,
}
const test2 = {
  input: [1, 3, 5, 6],
  target: 7,
}
console.log(`Out put for test1: `, searchInsert(test1.input, test1.target))
console.log(`Out put for test2: `, searchInsert(test2.input, test2.target))
