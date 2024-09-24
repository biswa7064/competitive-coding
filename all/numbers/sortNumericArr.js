function sortNumericArr(numArr) {
  if (numArr.length <= 1) return numArr
  const sortedArr = []
  for (let left = 0; left < numArr.length; left++) {
    for (let right = left + 1; right < numArr.length; right++) {
      if (numArr[left] > numArr[right]) {
        let temp = numArr[left]
        numArr[left] = numArr[right]
        numArr[right] = temp
      }
      sortedArr.push(numArr[left], numArr[right])
    }
  }
  return numArr
}

const testInput = {
  test1: [23, 11, 9, 5, 34, 36, 38, 22, 7],
}

console.log("Sorted array is - ", sortNumericArr(testInput.test1)) //[5, 7, 9, 11, 22, 23, 34, 36, 38]
