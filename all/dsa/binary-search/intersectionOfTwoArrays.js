function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (arr[mid] === target) {
      return true
    } else if (target > arr[mid]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return false
}

function intersection(arr1, arr2) {
  arr1.sort((a, b) => a - b)
  const intersection = new Set()
  for (const num of arr2) {
    if (binarySearch(arr1, num) && !intersection.has(num)) {
      intersection.add(num) // Store the number in the Set to avoid duplicates
    }
  }
  return Array.from(intersection)
}

// Example usage:
const arr1 = [1, 2, 2, 1]
const arr2 = [2, 2]
const result = intersection(arr1, arr2)
console.log(result) // Output: [2]

const arr3 = [4, 9, 5]
const arr4 = [9, 4, 9, 8, 4]
const result2 = intersection(arr3, arr4)
console.log(result2) // Output: [4, 9]
