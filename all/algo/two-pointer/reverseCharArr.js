function reverseString(s) {
  if (s.length && s.length <= 1) return s
  let start = 0,
    end = s.length - 1
  while (start <= end) {
    let temp = s[start]
    s[start] = s[end]
    s[end] = temp
    start++
    end--
  }
  return s
}

// Example 1:

const s = ["h", "e", "l", "l", "o"]
console.log(reverseString(s)) // ["o","l","l","e","h"]

// Example 2:

const s2 = ["H", "a", "n", "n", "a", "h"]
console.log(reverseString(s2)) // ["h", "a", "n", "n", "a", "H"]
