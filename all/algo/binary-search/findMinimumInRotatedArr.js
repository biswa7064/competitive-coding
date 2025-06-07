const findMinimum = (numArr) => {
  if (numArr?.length === 0) return -1
  let left = 0,
    right = numArr.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (numArr[mid] > numArr[right]) {
      left = mid + 1 // The minimum is in the right half
    } else {
      right = mid - 1 // The minimum is in the left half
    }
  }
  // When the loop finishes, left and right will be equal, pointing to the index of the minimum element. Return array[left]
  return numArr[left]
}

const rotatedArray = [4, 5, 6, 7, 0, 1, 2]
const min = findMinimum(rotatedArray)
console.log(min) // Output: 0

const rotatedArray1 = [3, 4, 5, 1, 2]
const min1 = findMinimum(rotatedArray1)
console.log(min1) // Output: 1

const rotatedArray2 = [11, 13, 15, 17]
const min2 = findMinimum(rotatedArray2)
console.log(min2) // Output: 11
