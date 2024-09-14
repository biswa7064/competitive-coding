const findHighestNum = (numArr) => {
  const numArrL = numArr.length
  let count = 0,
    firstHighNum = numArr[0]
  while (count < numArrL) {
    if (numArr[count] > firstHighNum) {
      firstHighNum = numArr[count]
    }
    count++
  }
  return firstHighNum
}
const findSecondLargestNum = (numArr) => {
  const numArrL = numArr.length
  if (numArrL < 2) {
    return undefined
  }
  let firstH = numArr[0],
    secondH = numArr[0],
    count = 0

  while (count < numArrL) {
    const num = numArr[count]
    if (num > firstH) {
      secondH = firstH
      firstH = num
    } else if (num > secondH && num !== firstH) {
      secondH = num
    }
    count++
  }
  return secondH
}

// find second largest number from two arrays
const find2ndLargestNumFromArrays = (arr1, arr2) => {
  const combinedArr = arr1.concat(arr2)
  console.log({ combinedArr })
  return findSecondLargestNum(combinedArr)
}

const testInput = {
  test1: [12, 20, 23, 11, 2, 3, 4],
  test2: [2, 0, 11, 10, 90],
}

console.log(
  "First highest number from array is",
  findHighestNum(testInput.test1)
)
console.log(
  "Second highest number from array is",
  findSecondLargestNum(testInput.test1)
)
console.log(
  "Second highest number from two arrays is",
  find2ndLargestNumFromArrays(testInput.test1, testInput.test2)
)
