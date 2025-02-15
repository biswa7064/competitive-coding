const fibonacciDP = (num) => {
  if (num <= 1) return num
  // create DP with number+1 values
  const dp = new Array(num + 1)
  dp[0] = 0
  dp[1] = 1
  let start = 2
  while (start <= num) {
    // add both current and next item
    dp[start] = dp[start - 1] + dp[start - 2]
    start++
  }
  return dp[num]
}

console.log(fibonacciDP(10)) // Output: 55
