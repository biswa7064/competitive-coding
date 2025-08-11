// Time Complexity: O(n) for the main loop
// Space Complexity: O(1) for the fixed size of currentItems
function countGoodSubstrings(s) {
  let count = 0
  let currentItems = []
  for (let i = 0; i < s.length; i++) {
    currentItems.push(s[i])
    if (currentItems.length > 3) {
      currentItems.shift()
    }
    if (currentItems.length === 3 && new Set(currentItems).size === 3) {
      count++
    }
  }
  return count
}

// Example Usage
console.log(countGoodSubstrings("xyzzaz")) // Output: 1
// explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz". The only good substring of length 3 is "xyz".
console.log(countGoodSubstrings("aababcabc")) // Output: 4
// There are 7 substrings of size 3: "aab", "aba", "bab", "abc", "bca", "cab", and "abc". The good substrings are "abc", "bca", "cab", and "abc".
