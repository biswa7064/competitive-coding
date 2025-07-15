// The input array should be sorted otherwise it will not work properly and will return wrong index.
const findTargetNumber = (arr, target) => {
  let start = 0,
    end = arr.length - 1,
    mid = 0
  while (start <= end) {
    mid = Math.floor((start + end) / 2)
    if (arr[mid] === target) return `Target found at index ${mid}`
    if (arr[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return "Target not found"
}

const testInput = {
  test1: [2, 4, 6, 8, 12, 15, 18],
  test2: [4, 8, 12, 16, 23, 28, 32],
}

console.log(findTargetNumber(testInput.test1, 12)) // Target found at index 4
console.log(findTargetNumber(testInput.test1, 5)) // Target not found
console.log(findTargetNumber(testInput.test2, 23)) // Target found at index 4
console.log(findTargetNumber(testInput.test2, 10)) // Target not found
console.log(findTargetNumber(testInput.test2, 4)) // Target found at index 0
console.log(findTargetNumber(testInput.test2, 32)) // Target found at index 6
