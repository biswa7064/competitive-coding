const groupAnagrams = (strArr) => {
  let anagram = {}
  for (let str of strArr) {
    const sortedStr = str.split("").sort().join("")
    if (!anagram[sortedStr]) {
      anagram[sortedStr] = []
    }
    anagram[sortedStr].push(str)
  }
  return Object.values(anagram)
}

const testArr = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log({ result: groupAnagrams(testArr) })
