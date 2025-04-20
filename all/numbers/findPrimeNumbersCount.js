/*
Description - 

Example 1:

Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
Example 2:

Input: n = 0
Output: 0
Example 3:

Input: n = 1
Output: 0
*/
function countPrimes(n) {
  if (n <= 1) return 0 // edge case: if the number is less than 2 there is no prime number
  let start = 2, // start from first prime number
    primeCount = new Array(n).fill(true), // first fill all the cell to true as it would be prime number
    count = 0 // initialize count
  while (start < n) {
    // start from 2 and the mark all the invalid position to false.
    if (primeCount[start]) {
      count++
      //   mark all multiple of "start" to false as it is not falling under primary number
      for (let j = start * start; j < n; j += start) {
        primeCount[j] = false
      }
    }
    start++
  }
  //   return the final count
  return count
}

console.log(countPrimes(10)) // 4
console.log(countPrimes(0)) // 0
console.log(countPrimes(1)) // 0
