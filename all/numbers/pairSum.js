function numSum(num) {
  let sum = 0
  while (num > 0) {
    sum += num % 10
    num = Math.floor(num / 10)
  }
  return sum
}
function parSum(arr) {
  const group = {}
  for (const char of arr) {
    const digitSum = numSum(Number(char))
    if (!group[digitSum]) {
      group[digitSum] = []
    }
    group[digitSum].push(char)
  }
  const grpArr = Object.values(group)
  const result = []
  // For each group, generate all possible pairs
  for (const group of grpArr) {
    if (group.length > 1) {
      for (let i = 0; i < group.length; i++) {
        for (let j = i + 1; j < group.length; j++) {
          result.push([group[i], group[j]])
        }
      }
    }
  }

  return result
}

/* 
Input: arr = [6, 15, 51, 23, 32]
Output: [
  [6, 15],
  [6, 51],
  [15, 51],
  [23, 32],
]
pairs: 4
*/
const test1 = [6, 15, 51, 23, 32, 34, 66]
console.log(
  `pairs: ${parSum(test1)} and number of pairs: ${parSum(test1).length}`
)
