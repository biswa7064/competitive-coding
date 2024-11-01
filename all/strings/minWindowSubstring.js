export function minWindowSubStr(s, t) {
  if (s.length === 0 || t.length === 0 || s.length < t.length) return ""
  const tMap = new Map()
  for (const char of t) {
    tMap.set(char, (tMap.get(char) || 0) + 1)
  }
  // Initialize variables
  let winStart = 0
  let minLength = Infinity
  let minWinStart = 0
  let matched = 0
  const winMap = new Map()
  let windowEnd = 0

  // Slide the window
  while (windowEnd < s.length) {
    const rightChar = s[windowEnd]

    // Add current character to window frequency map
    winMap.set(rightChar, (winMap.get(rightChar) || 0) + 1)

    // Check if current character matches required frequency
    if (tMap.has(rightChar) && winMap.get(rightChar) === tMap.get(rightChar)) {
      matched++
    }

    // Try to minimize window by moving start pointer
    while (matched === tMap.size) {
      // Update minimum window if current window is smaller
      if (windowEnd - winStart + 1 < minLength) {
        minLength = windowEnd - winStart + 1
        minWinStart = winStart
      }
      // Remove the leftmost character
      const leftChar = s[winStart]
      winMap.set(leftChar, winMap.get(leftChar) - 1)

      // Update matched count if removing leftChar breaks required frequency
      if (tMap.has(leftChar) && winMap.get(leftChar) < tMap.get(leftChar)) {
        matched--
      }
      winStart++
    }
    windowEnd++
  }
  return minLength === Infinity
    ? ""
    : s.substring(minWinStart, minWinStart + minLength)
}

/**
 * Input: s = "ADOBECODEBANC", t = "ABC"
 * Output: "BANC"
 * Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
 */
console.log(minWindowSubStr("ADOBECODEBANC", "ABC"))
