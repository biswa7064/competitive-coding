// Time Complexity: O(n)
// Space Complexity: O(k) for using constant window of length k
function maxSlidingWindow(numArr, k) {
  let currentWindow = [],
    resultArr = []
  for (let i = 0; i < numArr.length; i++) {
    if (currentWindow.length && currentWindow[0] <= i - k) {
      currentWindow.shift()
    }
    while (
      currentWindow.length &&
      numArr[currentWindow[currentWindow.length - 1]] <= numArr[i]
    ) {
      currentWindow.pop()
    }
    currentWindow.push(i)
    if (i >= k - 1) {
      resultArr.push(numArr[currentWindow[0]])
    }
  }
  return resultArr
}

// Example Usage
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)) // OP: [3,3,5,5,6,7]
// explanation -
/*
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
 */
console.log(maxSlidingWindow([1], 1)) // OP: [1]
