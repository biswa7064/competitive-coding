function permuteUnique(numArr) {
  const result = []
  numArr.sort((a, b) => a - b)
  const used = new Array(numArr.length).fill(false)
  function backtrack(temp) {
    if (temp.length === numArr.length) {
      result.push([...temp])
      return
    }
    for (let i = 0; i < numArr.length; i++) {
      if (used[i] || (i > 0 && numArr[i] === numArr[i - 1] && !used[i - 1]))
        continue
      used[i] = true
      temp.push(numArr[i])
      backtrack(temp)
      temp.pop()
      used[i] = false
    }
  }
  backtrack([])
  return result
}

/*
Example 1:

Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]
Example 2:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

 */

console.log(permuteUnique([1, 1, 2])) // [[1,1,2],[1,2,1],[2,1,1]]
console.log(permuteUnique([1, 2, 3])) // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
