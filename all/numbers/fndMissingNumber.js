function getMissingNumber(numArr) {
  const length = numArr.length
  if (!length) {
    return []
  }
  //   find max number in given array
  const maxNum = Math.max(...numArr)
  //   create one sequence array from 1 to maxNumber
  const nArr = []
  for (let i = 1; i <= maxNum; i++) {
    nArr.push(i)
  }
  //   filter out missing number
  return nArr.filter((num) => !numArr.includes(num))
}
const test1 = [1, 2, 4, 6, 8]
console.log("Missing numbers are", getMissingNumber(test1)) //[ 0, 3, 5, 7 ]
