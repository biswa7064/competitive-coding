const twoSum = (numArr, target) => {
  let seen = {}
  for (let i = 0; i < numArr.length; i++) {
    const int = numArr[i]
    const complement = target - int
    console.log({ complement, seen })
    if (seen[complement] !== undefined) {
      return [numArr[seen[complement]], numArr[i]]
    }
    seen[int] = i
  }
  return []
}

const test1 = twoSum([2, 3, 2, 3, 7, 9], 16)

console.log({ test1 })
