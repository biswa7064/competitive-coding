function moveZeroesToEnd(numArr) {
  if (numArr.length <= 1) return numArr
  let count = 0,
    end = numArr.length - 1
  while (count < end) {
    let next = count + 1
    while (next < end) {
      if (numArr[count] === 0) {
        let temp = numArr[count]
        numArr[count] = numArr[next]
        numArr[next] = temp
      }
      next++
    }
    count++
  }
  return numArr
}

const test1 = [1, 0, 2, 0, 3, 9, 6, 0, 5, 0]
console.log("Result after moving all zeros to end ", moveZeroesToEnd(test1))
