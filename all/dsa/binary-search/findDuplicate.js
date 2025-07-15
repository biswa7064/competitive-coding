function getCount(numArr, mid) {
  let count = 0
  for (const num of numArr) {
    if (num <= mid) {
      count++
    }
  }
  return count
}
const findDuplicate = (numArr) => {
  let left = 0,
    right = numArr.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    // For a mid value, we count how many numbers in numArr are less than or equal to mid.
    const count = getCount(numArr, mid)
    // If the count > mid, then the duplicate must be in the range [1, mid].
    if (count > mid) {
      right = mid - 1
    } else {
      // Else, it must be in the range [mid + 1, n].
      left = mid + 1
    }
  }
  return left
}

// Example usage:
const sortedArray = [3, 3, 3, 3, 3]
const duplicate = findDuplicate(sortedArray)
console.log(duplicate) // Output: 3
