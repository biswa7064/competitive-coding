function allPossibleCombination(nums, target) {
  const result = []
  nums.sort((a, b) => a - b) // Step 1: Sort the array

  function backtrack(remaining, combination, start) {
    if (remaining === 0) {
      result.push([...combination]) // Add valid combination
      return
    }
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue // Skip duplicates
      if (nums[i] > remaining) break // Stop early if the number is too large
      combination.push(nums[i]) // Include the current number
      backtrack(remaining - nums[i], combination, i + 1) // Move to the next number
      combination.pop() // Backtrack to try other possibilities
    }
  }

  backtrack(target, [], 0)
  return result
}

/*
Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
Example 2:

Input: candidates = [2,5,2,1,2], target = 5
Output: 
[
[1,2,2],
[5]
]
*/
console.log(allPossibleCombination([10, 1, 2, 7, 6, 1, 5], 8)) // [[1,1,6],[1,2,5],[1,7],[2,6]]
console.log(allPossibleCombination([2, 5, 2, 1, 2], 5)) //[[1, 2, 2], [5]]
