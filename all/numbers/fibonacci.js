// using loop
function fibonacciByLoop(n) {
  let start = 0,
    current = 1,
    next = 1,
    left = 0
  while (left < n) {
    next = start + current // in next we have to add current and start value
    start = current // update start with current value
    current = next // And current with next value
    left++
  }
  return start
}
// using recursion
function fibonacci(target) {
  if (target <= 1) return target
  return fibonacci(target - 1) + fibonacci(target - 2)
}

const test1 = 4
console.log("Fibonacci result is", fibonacci(test1)) // 0+1+1+2+3 [term=4 & final value=3]
console.log("Fibonacci result is", fibonacciByLoop(test1)) // 0+1+1+2+3 [term=4 & final value=3]
