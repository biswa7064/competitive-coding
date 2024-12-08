function gcdOfStrings(str1, str2) {
  // if both strings are not eqal after concat operation return ""
  if (str1 + str2 !== str2 + str1) return ""
  let str1Len = str1.length
  let str2Len = str2.length
  //   get the modulus of both strings
  //   reassign the str2Len with the modulus value
  //   till the str2Len !== 0
  while (str2Len !== 0) {
    let temp = str2Len
    str2Len = str1Len % str2Len
    str1Len = temp
  }
  //   get the substring of the remainder's length
  return str1.substring(0, str1Len)
}

/**
For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""
 */
console.log(gcdOfStrings("ABCABC", "ABC")) // "ABC"
console.log(gcdOfStrings("ABABAB", "ABAB")) // "AB"
console.log(gcdOfStrings("LEET", "CODE")) // ""
