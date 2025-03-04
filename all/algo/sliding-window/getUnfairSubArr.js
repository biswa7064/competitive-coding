function getUnfairSubArr(arr, val) {
  const len = arr.length
  arr.sort((a, b) => a - b)
  let minUnfair = Infinity
  for (let i = 0; i <= len - val; i++) {
    const subArr = arr.slice(i, i + val)
    const unfairness = subArr[val - 1] - subArr[0] // max-min
    // Update the minimum unfairness if necessary
    minUnfair = Math.min(minUnfair, unfairness)
  }
  return minUnfair
}

// Example usage:
const arr1 = [1, 4, 7, 2]
const k1 = 2
console.log(getUnfairSubArr(arr1, k1)) // Output: 1

const arr2 = [10, 100, 300, 200, 1000, 20, 30]
const k2 = 3
console.log(getUnfairSubArr(arr2, k2)) // Output: 20
