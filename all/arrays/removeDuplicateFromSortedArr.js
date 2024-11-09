function removeDuplicates(nums) {
  const seen = new Set()
  for (const num of nums) {
    seen.add(num)
  }
  const numArr = [...seen]
  for (let i = 0; i < nums.length; i++) {
    nums[i] = Number(numArr[i])
  }
  nums.length = numArr.length
  console.log({ nums, length: numArr.length })
  return numArr.length
}
/*
 *Input: nums = [1,1,2]
 *Output: 2, nums = [1,2,_]
 *Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.It does not matter what you leave beyond the returned k (hence they are underscores).
 */
const test1 = [1, 1, 2]
const test2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
removeDuplicates(test1)
removeDuplicates(test2)
