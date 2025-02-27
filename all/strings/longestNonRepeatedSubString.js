// substring -> Two Parameters -> From start(include) till end(not include)
// Ex - "Hello World"
// str.substring(1,4) => "ell"(not include the 4th character "o")
// IF not pass the end character position then it will give rest characters with start value.

const longestSubstringWithoutRepeatingCharacters = (str) => {
  const strArr = str.split("")
  if (!strArr.length) {
    return {
      maxLength: 0,
      maxLengthNonRepeatedSubstring: str,
    }
  }
  const result = strArr.reduce(
    (acc, char, index) => {
      if (acc.seen[char] !== undefined && acc.seen[char] >= acc.start) {
        acc.start = acc.seen[char] + 1 // Move the start to the next character of the last seen position
      }
      acc.seen[char] = index // Update the last seen position of the character
      const currentLength = index - acc.start + 1 // +1 is required to include both start and end character
      if (currentLength > acc.maxLength) {
        acc.maxLength = currentLength
        acc.maxSubStr = str.substring(acc.start, index + 1)
      }

      return acc
    },
    { seen: {}, start: 0, end: 0, maxLength: 0, maxSubStr: "" }
  )
  return {
    maxLength: result.maxLength,
    maxLengthNonRepeatedSubstring: result.maxSubStr,
  }
}

// using Set
// sliding window method
// right-> to add, left-> to delete
const longestNonRepeatedSubStringUsingSet = (str) => {
  const charSet = new Set()
  let maxLen = 0
  let left = 0
  let right = 0
  let currentSubstring = "",
    maxLengthSubstring = ""
  while (right < str.length - 1) {
    const char = str[right]
    if (!charSet.has(char)) {
      charSet.add(char)
      currentSubstring += char
      maxLen = Math.max(maxLen, charSet.size)
      maxLen === charSet.size && (maxLengthSubstring = currentSubstring)
      right++
    } else {
      charSet.delete(str[left])
      left++
      currentSubstring = str.substring(left, right)
    }
  }
  return {
    maxLength: maxLen,
    maxLengthNonRepeatedSubstring: maxLengthSubstring,
  }
}

const testStr1 = "abcabcbb" // 'abc', maxLength=3
const testStr2 = "bbbbb" // b, maxLength=1
const testStr3 = "pwwkew" // 'wke', maxLength=3
const testStr4 = "" // '', maxLength=0

console.log(
  "using normal method",
  longestSubstringWithoutRepeatingCharacters(testStr1)
)
console.log("using Set", longestNonRepeatedSubStringUsingSet(testStr1))
console.log(
  "using normal method",
  longestSubstringWithoutRepeatingCharacters(testStr2)
)
console.log("using Set", longestNonRepeatedSubStringUsingSet(testStr2))
console.log(
  "using normal method",
  longestSubstringWithoutRepeatingCharacters(testStr3)
)
console.log("using Set", longestNonRepeatedSubStringUsingSet(testStr3))
console.log(
  "using normal method",
  longestSubstringWithoutRepeatingCharacters(testStr4)
)
console.log("using Set", longestNonRepeatedSubStringUsingSet(testStr4))

// sliding window algo with plain object
const lengthOfLongestSubstring = function (s) {
  let hash = {}
  let left = 0
  let right = 0
  let maxSubStr = ""

  while (right < s.length) {
    const char = s[right]

    if (char in hash && hash[char] >= left) {
      left = hash[char] + 1
    }

    hash[char] = right
    const curSubStr = s.slice(left, right + 1)

    if (maxSubStr.length < curSubStr.length) {
      maxSubStr = curSubStr
    }

    right++
  }

  return maxSubStr
}

const testStrPO1 = "abcabcbb" // 'abc', maxLength=3
const testStrPO2 = "bbbbb" // b, maxLength=1
const testStrPO3 = "pwwkew" // 'wke', maxLength=3

console.log(
  `using plain object for ${testStrPO1}`,
  lengthOfLongestSubstring(testStrPO1)
)
console.log(
  `using plain object for ${testStrPO2}`,
  lengthOfLongestSubstring(testStrPO2)
)
console.log(
  `using plain object for ${testStrPO3}`,
  lengthOfLongestSubstring(testStrPO3)
)
