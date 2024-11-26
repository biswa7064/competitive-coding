function subsets(numArr) {
  const result = []
  function backtrack(start, curr) {
    result.push([...curr]) // Add the current subset to the result
    for (let i = start; i < numArr.length; i++) {
      curr.push(numArr[i]) // Include numArr[i]
      backtrack(i + 1, curr) // Explore further subsets including numArr[i]
      curr.pop() // Backtrack: remove numArr[i] and try other combinations
    }
  }
  backtrack(0, [])
  return result
}

console.log(subsets([1, 2, 3])) // OP: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
console.log(subsets([0])) // OP: [[],[0]]
