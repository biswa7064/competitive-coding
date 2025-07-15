// Count the number of pairs in an array that sum to a target value
// Time Complexity: O(n)
// Space Complexity: O(n) - for the frequency map in the worst case
function countPairsWithGivenSum(numArr, target) {
  let freqMap = new Map(),
    count = 0
  for (const num of numArr) {
    const complement = target - num
    if (freqMap.has(complement)) {
      count += freqMap.get(complement)
    }
    freqMap.set(num, (freqMap.get(num) || 0) + 1)
  }
  console.log({ freqMap, count })
  return count
}

console.log(
  `Array: [1, 5, 7, -1], Target Sum: 6 -> Pairs: ${countPairsWithGivenSum(
    [1, 5, 7, -1],
    6
  )} (Expected: 2)`
) // (1, 5), (7, -1)
console.log(
  `Array: [1, 5, 7, -1, 5], Target Sum: 6 -> Pairs: ${countPairsWithGivenSum(
    [1, 5, 7, -1, 5],
    6
  )} (Expected: 3)`
) // (1, 5), (7, -1), (1, 5)
console.log(
  `Array: [2, 2, 2, 2], Target Sum: 4 -> Pairs: ${countPairsWithGivenSum(
    [2, 2, 2, 2],
    4
  )} (Expected: 6)`
) // (2,2), (2,2), (2,2), (2,2), (2,2), (2,2)
console.log(
  `Array: [1, 2, 3, 4, 5], Target Sum: 10 -> Pairs: ${countPairsWithGivenSum(
    [1, 2, 3, 4, 5],
    10
  )} (Expected: 0)`
)
console.log(
  `Array: [], Target Sum: 5 -> Pairs: ${countPairsWithGivenSum(
    [],
    5
  )} (Expected: 0)`
)
console.log(
  `Array: [6], Target Sum: 6 -> Pairs: ${countPairsWithGivenSum(
    [6],
    6
  )} (Expected: 0)`
)
