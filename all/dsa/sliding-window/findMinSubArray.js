function findMinSubArrayForTarget(numArr, target) {
  let minCount = Infinity
  const result = []
  let currentSum = 0
  let windowStart = 0

  for (let windowEnd = 0; windowEnd < numArr.length; windowEnd++) {
    currentSum += numArr[windowEnd]

    while (currentSum >= target) {
      if (currentSum === target) {
        // avoid slice for large set of data
        const subArr = numArr.slice(windowStart, windowEnd + 1) // +1 to include the last number
        minCount = Math.min(minCount, subArr.length)
        result.push(subArr)
      }
      //   remove the start element and slide the window
      currentSum -= numArr[windowStart]
      windowStart++
    }
  }
  //   set the min count subarray with only one unique set
  const finalResult = []
  let isAlreadyAdded = false
  for (const item of result) {
    if (!isAlreadyAdded && item.length === minCount) {
      finalResult.push(...item)
      isAlreadyAdded = true
    }
  }
  return minCount === Infinity
    ? {
        minCount: 0,
        finalResult: [],
      }
    : {
        minCount,
        finalResult,
      }
}

/*Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
*/
console.log(findMinSubArrayForTarget([2, 3, 1, 2, 4, 3], 7))

/*Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1
*/
console.log(findMinSubArrayForTarget([1, 4, 4], 4))

/*Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
*/
console.log(findMinSubArrayForTarget([1, 1, 1, 1, 1, 1, 1, 1], 11))
