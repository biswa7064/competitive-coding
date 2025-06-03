//  Given a sorted array of integers and a target value, find the first and last occurrence of the target value in the array.
function findFirstLastOccurrence(numArr, target) {
  const first = firstOccurrence(numArr, target)
  if (firstOccurrence === -1) return [-1, -1]
  const last = lastOccurrence(numArr, target)
  return [first, last]
}

function firstOccurrence(numArr, target) {
  let first = 0,
    last = numArr.length - 1,
    result = -1
  while (first <= last) {
    const mid = Math.floor((first + last) / 2)
    if (numArr[mid] === target) {
      result = mid
      last = mid - 1 // continue searching in the left half for the first occurrence
    } else if (numArr[mid] < target) {
      first = mid + 1
    } else {
      last = mid - 1
    }
  }
  return result
}

function lastOccurrence(numArr, target) {
  let first = 0,
    last = numArr.length - 1,
    result = -1
  while (first <= last) {
    const mid = Math.floor((first + last) / 2)
    if (numArr[mid] === target) {
      result = mid
      first = mid + 1 // continue searching in the right half for the last occurrence
    } else if (numArr[mid] < target) {
      first = mid + 1
    } else {
      last = mid - 1
    }
  }
  return result
}

// Example usage:
const numArr = [5, 7, 7, 8, 8, 8, 10]
console.log(findFirstLastOccurrence(numArr, 8)) // Output: [3, 5]
console.log(findFirstLastOccurrence(numArr, 6)) // Output: [-1, -1]
console.log(findFirstLastOccurrence(numArr, 10)) // Output: [6, 6]
