function maxSubArray(nums) {
  if (nums.length === 1) return nums[0]
  let lSum = nums[0],
    currentSum = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (currentSum + nums[i] > nums[i]) {
      currentSum += nums[i]
    } else {
      currentSum = nums[i]
    }
    if (currentSum > lSum) {
      lSum = currentSum
    }
  }
  return lSum
}

/*
Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 */
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // OP: 6
console.log(maxSubArray([1])) // OP: 1
console.log(maxSubArray([5, 4, -1, 7, 8])) // OP: 23
