// Time Complexity: O(n) for iterating through the string
// Space Complexity: O(n) for the lastFound map and the seen set

function removeDuplicateLetters(s) {
  let lastFound = {},
    start = 0,
    end = s.length - 1,
    stack = [],
    seen = new Set()
  for (let i = 0; i <= end; i++) {
    // store the last occurrence of each character
    lastFound[s[i]] = i
  }
  while (start <= end) {
    const item = s[start]
    // if the item is already seen, skip it
    if (seen.has(item)) {
      start++
      continue
    }
    while (
      stack.length &&
      item < stack[stack.length - 1] &&
      start < lastFound[stack[stack.length - 1]]
    ) {
      seen.delete(stack.pop())
    }
    seen.add(item)
    stack.push(item)
    start++
  }
  return stack.join("")
}

// Example Usage
console.log(removeDuplicateLetters("bcabc")) // Output: "abc"
console.log(removeDuplicateLetters("cbacdcbc")) // Output: "acdb"
