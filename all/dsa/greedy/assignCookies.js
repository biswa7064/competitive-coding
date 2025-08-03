// Time Complexity: O(n log n) for sorting
// Space Complexity: O(1) for the two pointers
function findContentChildren(g, s) {
  // sort greed factor and size of cookies
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  let count = 0,
    i = 0,
    j = 0
  while (i < g.length && j < s.length) {
    // if cookie can satisfy the child, assign it and move to the next child and cookie.
    // if the current cookie is not enough, move to the next cookie.
    if (s[j] >= g[i]) {
      count++
      i++
      j++
    } else {
      j++
    }
  }
  return count
}

// Example Usage
console.log(findContentChildren([1, 2, 3], [1, 1])) // Output: 1
console.log(findContentChildren([1, 2], [1, 2, 3])) // Output: 2
