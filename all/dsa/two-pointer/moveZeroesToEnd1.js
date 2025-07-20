// Using two-pointer the Time Complexity: O(n) and Space Complexity: O(1)
// Slow pointer(ex:interPos) keeps track of the position for non-zero elements.
// Fast pointer(ex:item) iterates through the array.
//  Efficient than nested loop approach.
function moveZeroesToEnd1(numArr) {
  let interPos = 0
  for (const item of numArr) {
    if (item !== 0) {
      numArr[interPos] = item
      interPos++
    }
  }
  while (interPos < numArr.length) {
    numArr[interPos] = 0
    interPos++
  }
  return numArr
}

const test1 = [1, 0, 2, 0, 3, 9, 6, 0, 5, 0]
console.log("Result after moving all zeros to end ", moveZeroesToEnd1(test1)) // OP: [1, 2, 3, 9, 6, 5, 0, 0, 0, 0]
