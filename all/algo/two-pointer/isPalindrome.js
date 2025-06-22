function isPalindrome(str) {
  let left = 0
  let right = str.length - 1

  while (left <= right) {
    if (!/[a-zA-Z0-9]/.test(str[left].toLowerCase())) {
      left++
      continue
    } else if (!/[a-zA-Z0-9]/.test(str[right].toLowerCase())) {
      right--
      continue
    }
    if (str[left].toLowerCase() !== str[right].toLowerCase()) {
      return false
    }
    left++
    right--
  }

  return true
}

// Example Usage:
console.log(isPalindrome("Race a car")) // Output: false
console.log(isPalindrome("A man, a plan, a canal: Panama")) // Output: true
