// Time Complexity: O(n log n) for sorting
// Space Complexity: O(n) for storing string representations
const largestNumber = (numArr) => {
  const stringArr = numArr.map(String) // convert string for comparison
  //   sort the array based on the custom comparison
  //   if a + b > b + a then a should come before b
  //   else b should come before a
  stringArr.sort((a, b) => {
    const ab = a + b
    const ba = b + a
    return ba.localeCompare(ab)
  })
  // base case for "0"
  if (stringArr[0] === "0") {
    return "0"
  }
  return stringArr.join("")
}

//  Example Usage
const inputNumbers = [3, 30, 34, 5, 9]
console.log(largestNumber(inputNumbers)) // "9534330"
const inputNumbers1 = [10, 2]
console.log(largestNumber(inputNumbers1)) // "210"
const inputNumbers2 = [0, 0]
console.log(largestNumber(inputNumbers2)) // "0"
