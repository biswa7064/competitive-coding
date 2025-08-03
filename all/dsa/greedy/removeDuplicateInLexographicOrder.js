// Time Complexity: O(n) for iterating through the string
// Space Complexity: O(n) for the lastFound map and the seen set

function removeDuplicateLetters(s) {
  let lastFound = {},
    stack = [],
    seen = new Set()
  for (let i = 0; i < s.length; i++) {
    // store the last occurrence of each character
    lastFound[s[i]] = i
  }
  for (let start = 0; start < s.length; start++) {
    const item = s[start]
    const stackTopItem = stack[stack.length - 1]
    // if the item is already seen, skip it
    if (seen.has(item)) continue
    // if the item is not seen, check if we can pop from the stack
    // we can pop if the stack is not empty, the current item is smaller than the last item in the stack,
    // and the last occurrence of the last item in the stack is after the current start index
    while (
      stack.length &&
      item < stackTopItem &&
      start < lastFound[stackTopItem]
    ) {
      seen.delete(stack.pop()) // remove item from seen set and stack
    }
    seen.add(item)
    stack.push(item)
  }
  return stack.join("")
}

// Example Usage
console.log(removeDuplicateLetters("bcabc")) // Output: "abc"
console.log(removeDuplicateLetters("cbacdcbc")) // Output: "acdb"
