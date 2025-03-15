function findAnagrams(s, p) {
  const result = []
  const sCount = new Array(26).fill(0)
  const pCount = new Array(26).fill(0)
  let aCharCodeAt = "a".charCodeAt(0)
  //   set the frequency for pCount
  for (let char of p) {
    pCount[char.charCodeAt(0) - aCharCodeAt]++
  }
  let left = 0,
    right = 0
  while (right < s.length) {
    // include current character in the window
    sCount[s.charCodeAt(right) - aCharCodeAt]++
    // if window size exceeds p.length remove the left most item
    // increase left item to slide the window
    const windowLen = right - left + 1
    if (windowLen > p.length) {
      sCount[s.charCodeAt(left) - aCharCodeAt]--
      left++
    }
    const incWindowLen = right - left + 1
    // if frequency matches
    // push the start index to the result
    if (incWindowLen === p.length && isMatchFrequency(sCount, pCount)) {
      result.push(left)
    }
    right++
  }
  return result
}

function isMatchFrequency(arr1, arr2) {
  return arr1.join() === arr2.join()
}

console.log(findAnagrams("cbaebabacd", "abc")) // [0,6]
console.log(findAnagrams("abab", "ab")) // Output: [0,1,2]
