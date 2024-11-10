function nextPermutation(nums) {
  let i = nums.length - 2

  // Step 1: Find the first decreasing element from the end
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--
  }
  if (i >= 0) {
    // Step 2: Find the smallest element larger than nums[i] from the end
    let j = nums.length - 1
    while (nums[j] <= nums[i]) {
      j--
    }
    // Swap elements at i and j
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }

  // Step 3: Reverse the elements after index i
  let left = i + 1,
    right = nums.length - 1
  while (left < right) {
    let temp = nums[left]
    nums[left] = nums[right]
    nums[right] = temp
    left++
    right--
  }

  return nums
}
/*
Description - 
For example, the next permutation of arr = [1,2,3] is [1,3,2].
Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
*/
// Example usage
const nums = [1, 2, 3]
const nums2 = [3, 2, 1]
console.log(
  `Input: ${JSON.stringify(nums)} and OutPut: ${JSON.stringify(
    nextPermutation(nums)
  )}`
) // Output: [1, 3, 2]
console.log(
  `Input: ${JSON.stringify(nums2)} and OutPut: ${JSON.stringify(
    nextPermutation(nums2)
  )}`
) // Output: [1, 2, 3]
