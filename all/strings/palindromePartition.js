import { isPalindrome } from "../utils/isPalindrome.js"

const palindromePartition = (s) => {
  const result = []
  const backtrack = (start, current) => {
    if (start === s.length) {
      result.push([...current])
      return
    }
    for (let i = start; i < s.length; i++) {
      const substring = s.slice(start, i + 1) // Check if substring s[start:end+1] is a palindrome
      if (isPalindrome(substring)) {
        current.push(substring) // Add substring to current partition
        backtrack(i + 1, current) // Recurse for the remaining string
        current.pop() //Backtrack
      }
    }
  }
  backtrack(0, [])
  return result
}

/*
*Example 1:

Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]

*Example 2:
Input: s = "a"
Output: [["a"]] 
*/

console.log(palindromePartition("aab")) // [["a","a","b"],["aa","b"]]
console.log(palindromePartition("a")) // [["a"]]
