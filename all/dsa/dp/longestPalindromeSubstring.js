function longestPalindromeSubstringDP(str) {
  if (str.length < 2) return str
  const len = str.length
  let start = 0,
    maxLength = 1
  const dp = new Array(len).fill(null).map(() => new Array(len).fill(false))
  for (let i = 0; i < len; i++) {
    dp[i][i] = true
  }
  // Check for palindromes of length 2
  for (let i = 0; i < len - 1; i++) {
    if (str[i] === str[i + 1]) {
      dp[i][i + 1] = true
      start = i
      maxLength = 2
    }
  }
  // Check for palindromes of length 3 or more
  for (let k = 3; k <= len; k++) {
    for (let i = 0; i <= len - k; i++) {
      const j = i + k - 1 // End index of the substring

      // Check if the inner substring is a palindrome and the outer characters match
      if (dp[i + 1][j - 1] && str[i] === str[j]) {
        dp[i][j] = true
        if (k > maxLength) {
          start = i
          maxLength = k
        }
      }
    }
  }

  return str.substring(start, start + maxLength)
}

// Example usage
const string1 = "babad"
const string2 = "cbbd"
const string3 = "a"
const string4 = "ac"
const string5 = "racecar"

console.log(
  `Longest palindrome in '${string1}': '${longestPalindromeSubstringDP(
    string1
  )}'`
) //'bab'
console.log(
  `Longest palindrome in '${string2}': '${longestPalindromeSubstringDP(
    string2
  )}'`
) // 'bb'
console.log(
  `Longest palindrome in '${string3}': '${longestPalindromeSubstringDP(
    string3
  )}'`
) // 'a'
console.log(
  `Longest palindrome in '${string4}': '${longestPalindromeSubstringDP(
    string4
  )}'`
) // 'a'
console.log(
  `Longest palindrome in '${string5}': '${longestPalindromeSubstringDP(
    string5
  )}'`
) // 'racecar'
