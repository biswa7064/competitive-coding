function moveZeroesToEnd(numArr) {
  if (!numArr.length > 1) return numArr
  let count = 0
  for (let i = 0; i < numArr.length - 1; i++) {
    if (numArr[i] !== 0) {
      numArr[count] = numArr[i]
      count++
    }
  }
  console.log({ count })
  for (let i = count; i < numArr.length - 1; i++) {
    numArr[i] = 0
  }
  return numArr
}

const test1 = [1, 0, 2, 0, 3, 9, 6, 0, 5, 0]
console.log("Result after moving all zeros to end ", moveZeroesToEnd(test1))
