function isAnagram(s, t) {
  if (s.length !== t.length) return false
  let charCount = new Map()
  for (let i = 0; i < t.length; i++) {
    charCount.set(t[i], (charCount.get(t[i]) || 0) + 1)
  }
  for (let i = 0; i < s.length; i++) {
    charCount.set(s[i], (charCount.get(s[i]) || 0) - 1)
  }
  return [...charCount.keys()].every((i) => charCount.get(i) === 0)
}

/*
Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false
*/
console.log(isAnagram("rat", "car")) // false
console.log(isAnagram("anagram", "nagaram")) // true

// using plain object
// Time Complexity: O(N)
// Space Complexity: O(1)
function isAnagramUsingPO(s, t) {
  if (s.length !== t.length) return false
  let charCount = {}
  for (let i = 0; i < t.length; i++) {
    const char = t[i]
    charCount[char] = (charCount[char] || 0) + 1
  }
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    charCount[char] = (charCount[char] || 0) - 1
    if (charCount[char] < 0) {
      return false
    }
  }
  return true
}
console.log(isAnagramUsingPO("rat", "car")) // false
console.log(isAnagramUsingPO("anagram", "nagaram")) // true
