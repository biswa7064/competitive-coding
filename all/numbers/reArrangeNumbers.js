/*
Question - Rearrange number array so that it will give result like combination of smallest and largest number alternatively
Input - [1, 2, 3, 9, 8, 7, 6, 5, 4]
Output - [1, 9, 2, 8, 3,7, 4, 6, 5]
*/
const reArrangeNumbers = (numArr) => {
  const sortedNumArr = numArr.sort()
  if (!sortedNumArr.length > 2) return sortedNumArr
  const resultArr = []
  let leftItem = 0,
    rightItem = sortedNumArr.length - 1
  // check for all items by comparing with <=
  while (leftItem <= rightItem) {
    // if items are "=" then push that as small one
    // push the last item if there is any left
    if (leftItem === rightItem) {
      resultArr.push(sortedNumArr[leftItem])
    } else {
      // if items are "<" then push both small and large item
      resultArr.push(sortedNumArr[leftItem])
      resultArr.push(sortedNumArr[rightItem])
    }
    leftItem++
    rightItem--
  }
  return resultArr
}

const test1 = [1, 2, 3, 9, 8, 7, 6, 5, 4]
console.log("After rearrangement - ", reArrangeNumbers(test1)) //[1, 9, 2, 8, 3,7, 4, 6, 5]
