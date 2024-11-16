function reverseWords(s) {
  const newStr = s.replace(/\s{2,}/g, " ").trim()
  let resultStr = ""
  const splitArr = newStr.split(" ")
  let start = 0,
    end = splitArr.length - 1
  while (start <= splitArr.length - 1) {
    if (start === splitArr.length - 1) {
      resultStr += splitArr[end]
    } else {
      resultStr += splitArr[end] + " "
    }
    start++
    end--
  }
  return resultStr
}

/*
Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
*/
console.log(reverseWords("the sky is blue")) // "blue is sky the"
console.log(reverseWords("  hello world  ")) // "world hello"
console.log(reverseWords("a good   example")) // "example good a"
