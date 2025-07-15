// The input array should be sorted otherwise it will not work properly and will return wrong index.
const findFirstOccurrence = (arr, target) => {
  let start = 0,
    end = arr.length - 1,
    result = -1
  while (start <= end) {
    const mid = Math.floor((start + end) / 2) // calculate mid index
    if (arr[mid] === target) {
      result = mid
      end = mid - 1 // continue searching in the left half
    } else if (arr[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return result
}

const testInput = {
  test1: [2, 4, 6, 8, 12, 15, 18],
  test2: [4, 8, 12, 16, 23, 28, 32],
}

console.log(findFirstOccurrence(testInput.test1, 12)) // 4
console.log(findFirstOccurrence(testInput.test1, 5)) // -1
console.log(findFirstOccurrence(testInput.test2, 23)) // 4
console.log(findFirstOccurrence(testInput.test2, 10)) // -1
console.log(findFirstOccurrence(testInput.test2, 4)) // 0
console.log(findFirstOccurrence(testInput.test2, 32)) // 6
console.log(findFirstOccurrence(testInput.test1, 2)) // 0
