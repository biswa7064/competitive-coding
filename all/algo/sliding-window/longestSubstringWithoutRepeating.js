export function longestSubstringWithoutRepeating(s) {
  let charSet = new Set()
  let maxLength = 0,
    left = 0
  let start = 0
  for (let right = 0; right < s.length; right++) {
    // If character is already in window, shrink from left
    while (charSet.has(s[right])) {
      charSet.delete(s[left])
      left++
    }
    // Add current character to window
    charSet.add(s[right])
    // Update maximum length
    if (right - left + 1 > maxLength) {
      maxLength = right - left + 1
      start = left
    }
  }
  return JSON.stringify({
    maxLength,
    substr: s.substring(start, start + maxLength),
  })
}

console.log(
  `Input: "abcabcbb" → Output: ${longestSubstringWithoutRepeating("abcabcbb")}`
) // Expected: 3 ("abc")
console.log(
  `Input: "bbbbb" → Output: ${longestSubstringWithoutRepeating("bbbbb")}`
) // Expected: 1 ("b")
console.log(
  `Input: "pwwkew" → Output: ${longestSubstringWithoutRepeating("pwwkew")}`
) // Expected: 3 ("wke")
console.log(`Input: "" → Output: ${longestSubstringWithoutRepeating("")}`) // Expected: 0
