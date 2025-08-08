// Problem statement:
/* You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

// Time Complexity: O(n) and Space Complexity: O(1) as we are only traversing the staircase once and using a constant amount of space.

function climbStairs(n) {
  if (n <= 1) return 1
  if (n <= 2) return n
  //   if no step is required or only one step is required, so prev=1 and current=1
  let prev = 1,
    current = 1,
    start = 2
  // if more steps are required start from 2
  while (start <= n) {
    const next = prev + current
    prev = current
    current = next
    start++
  }
  //   return the number of distinct ways to reach the top by current value as it always holds the latest count
  return current
}

function climbStairsMemo(n) {
  // base cases
  if (n <= 1) return 1
  if (n === 2) return n
  //   create map to memoize
  const memo = new Map()
  //   recurse method to count and store every possible way to reach the top
  function recurseSteps(steps) {
    // if reach top return 1
    if (steps === n) return 1
    // if steps is overweight
    if (steps > n) return 0
    // recursively calculate steps(1 or 2) and store in the map
    if (!memo.has(steps)) {
      const ways = recurseSteps(steps + 1) + recurseSteps(steps + 2)
      memo.set(steps, ways)
    }
    // once found return the calculated value
    return memo.get(steps)
  }
  return recurseSteps(0)
}

// Example Usage
console.log(climbStairs(2)) // Output: 2 (1 step + 1 step or 2 steps)
console.log(climbStairs(3)) // Output: 3 (1+1+1, 1+2, 2+1)
console.log(climbStairs(4)) // Output: 5 (1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2)
console.log(climbStairs(5)) // Output: 8 (combinations of steps to reach the top)
// using memoize logic
console.log(climbStairsMemo(2)) // Output: 2 (1 step + 1 step or 2 steps)
console.log(climbStairsMemo(3)) // Output: 3 (1+1+1, 1+2, 2+1)
console.log(climbStairsMemo(4)) // Output: 5 (1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2)
console.log(climbStairsMemo(5)) // Output: 8 (combinations of steps to reach the top)
