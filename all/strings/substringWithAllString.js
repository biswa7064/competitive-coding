function findSubstring(s, words) {
  if (words.length === 0 || s.length === 0) return []

  const wordLength = words[0].length
  const wordCount = words.length
  const totalWordsLength = wordLength * wordCount

  if (s.length < totalWordsLength) return []

  const wordMap = {}
  for (const word of words) {
    wordMap[word] = (wordMap[word] || 0) + 1
  }

  const result = []
  const k = s.length - totalWordsLength
  // Traverse the string with a sliding window of size totalWordsLength
  for (let i = 0; i <= k; i++) {
    const seenWords = {}
    let j = 0

    // Check if the current window contains a valid concatenation of words
    while (j < wordCount) {
      const wordStart = i + j * wordLength
      const word = s.substring(wordStart, wordStart + wordLength)
      if (!(word in wordMap)) {
        break // Invalid word, move to the next starting position
      }
      seenWords[word] = (seenWords[word] || 0) + 1
      // If a word is seen more times than it appears in the words list, break
      if (seenWords[word] > wordMap[word]) {
        break
      }
      j++
    }
    // If all words match, record the starting index
    if (j === wordCount) result.push(i)
  }

  return result
}

// Example usage:
const s = "barfoothefoobarman"
const words = ["foo", "bar"]
console.log(`expected substring: ${JSON.stringify(findSubstring(s, words))}`) // Output: [0, 9]
