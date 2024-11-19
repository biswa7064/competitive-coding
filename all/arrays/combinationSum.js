function combinationSum(input, target) {
  const result = []
  function backtrack(remain, combination, pos) {
    // 0 means target found and ned to push the combination arr to result arr
    if (remain === 0) {
      result.push([...combination])
      return
    }
    // <0 means target exceed, so need to return
    if (remain < 0) return
    // loop through and use backtrack algo to get all possible results
    for (let ind = pos; ind < input.length; ind++) {
      combination.push(input[ind])
      // Recur with the reduced target, allowing reuse of the same number
      backtrack(remain - input[ind], combination, ind)
      //   pop out the last added item
      combination.pop()
    }
  }
  backtrack(target, [], 0)
  return result
}

/*
Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
Example 3:

Input: candidates = [2], target = 1
Output: []
*/
console.log(combinationSum([2, 3, 6, 7], 7)) // [[2,2,3],[7]]
console.log(combinationSum([2, 3, 5], 8)) // [[2,2,2,2],[2,3,3],[3,5]]
console.log(combinationSum([2], 1)) // []
