function permute(nums) {
  const result = []
  //   if length<2 return the result
  if (nums.length < 2) {
    result.push([...nums])
    return result
  }
  //   backtrack and get all possible combinations
  const backTrack = (curr, remain) => {
    // if valid combination found push and return this
    if (remain.length === 0) {
      result.push([...curr])
      return
    }
    // backtrack
    for (let i = 0; i < remain.length; i++) {
      curr.push(remain[i])
      const nextRemain = [...remain]
      nextRemain.splice(i, 1)
      backTrack(curr, nextRemain)
      curr.pop()
    }
  }
  backTrack([], nums)
  return result
}
/*
Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]
*/
console.log(permute([1, 2, 3])) // OP: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permute([0, 1])) // OP: [[0,1],[1,0]]
console.log(permute([1])) // OP: [[1]]
