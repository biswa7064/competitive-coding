export const possibleNumsForTarget = (numArr, target) => {
  const results = []
  let seen = {}
  for (let i = 0; i < numArr.length; i++) {
    const complement = target - numArr[i]
    if (seen[complement]) {
      results.push([numArr[i], complement])
    }
    seen[numArr[i]] = i
  }
  return results
}

const test1 = possibleNumsForTarget([2, 3, 5, 7, 9], 15)

console.log({ test1 })
