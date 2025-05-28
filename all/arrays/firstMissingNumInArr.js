function firstMissingNumInArr(numArr) {
  if (numArr.length === 0) return 1
  const numSet = new Set(numArr)
  let missingNum = 1
  while (numSet.has(missingNum)) {
    missingNum += 1
  }
  return missingNum
}

const testData = {
  t1: [1, 3, 4, 6],
  t2: [7, 3, 6, 2],
  t3: [-1, -2],
  t4: Array.from({ length: 100000 }, (_, i) => i + 1).filter(
    (num) => num % 4969 !== 0
  ), // Large dataset with missing numbers (multiples of 4969)
}

Object.entries(testData).forEach(([key, value]) => {
  console.log(`Result for ${key}`, firstMissingNumInArr(value))
})
