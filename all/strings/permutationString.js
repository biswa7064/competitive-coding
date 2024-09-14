const arePermutations = (str1, str2) => {
  if (str1.length !== str2.length) return false
  const countStr1 = {}
  for (const item of str1) {
    countStr1[item] = (countStr1[item] || 0) + 1
  }
  for (const item of str2) {
    if (!countStr1[item]) {
      return false
    }
    countStr1[item]--
  }
  return true
}

// Test the function
console.log(arePermutations("abc", "dca")) // false
console.log(arePermutations("abcde", "dcabe")) // true
console.log(arePermutations("aabc", "abcc")) // false
console.log(arePermutations("abc", "abcd")) // false
console.log(arePermutations("aabbcc", "abcabc")) // true
