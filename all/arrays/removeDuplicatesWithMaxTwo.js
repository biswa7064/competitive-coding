function removeDuplicates(numArr) {
  const length = numArr.length || 0
  if (length <= 2) return length
  let k = 2
  for (let i = 2; i < length; i++) {
    if (numArr[k] === undefined) continue
    if (numArr[i] !== numArr[k - 2]) {
      numArr[k] = numArr[i]
      k++
    }
  }
  return k
}

/*
Example 1:

Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,1,2,3,3]
Output: 7, nums = [0,0,1,1,2,3,3,_,_]
Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores). 

*/

const testCases = [
  [1, 1, 1, 2, 2, 3],
  [0, 0, 1, 1, 1, 1, 2, 3, 3],
  [1, 2, 3],
  [1, 1, 1, 1],
  [],
]

testCases.forEach((numArr, index) => {
  console.log(`Test Case ${index + 1}:`)
  console.log(`Input: numArr = [${numArr.join(", ")}]`)
  const k = removeDuplicates(numArr)
  console.log(
    `Output: ${k}, numArr = [${numArr.slice(0, k).join(", ")}${
      k < numArr.length ? ", _".repeat(numArr.length - k) : ""
    }]`
  )
  console.log("---")
})
