function sortNumericArr(numArr) {
  if (numArr.length <= 1) return numArr
  let left = 0,
    right
  while (left < numArr.length) {
    right = left + 1
    while (right < numArr.length) {
      if (numArr[right] < numArr[left]) {
        let temp = numArr[left]
        numArr[left] = numArr[right]
        numArr[right] = temp
      }
      right++
    }
    left++
  }
  return numArr
}

const testInput = {
  test1: [23, 11, 9, 5, 34, 36, 38, 22, 7],
}

console.log("Sorted array is - ", sortNumericArr(testInput.test1)) //[5, 7, 9, 11, 22, 23, 34, 36, 38]
