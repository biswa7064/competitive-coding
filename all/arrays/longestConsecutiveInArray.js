function longestConsecutive(numArr) {
  if (numArr.length === 0) return 0
  const numMap = {}
  for (let num of numArr) {
    !numMap[num] && (numMap[num] = true)
  }
  let longest = 0
  for (const num of numArr) {
    if (numMap[num - 1]) continue
    let count = 1
    let currentNum = num
    while (numMap[currentNum + 1]) {
      count++
      currentNum++
    }
    longest = Math.max(longest, count)
  }
  return longest
}

/*
Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
*/

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])) // Expected output: 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])) // Expected output: 9
console.log(longestConsecutive([])) // Expected output: 0
console.log(longestConsecutive([1, 2, 0, 1])) // Expected output: 3
