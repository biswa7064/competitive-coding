function decodeRepeatedChar(str) {
  const stackResult = []
  const counts = []
  let currentCount = 0,
    currentString = ""
  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    if (char >= "0" && char <= "9") {
      currentCount = currentCount * 10 + parseInt(char)
    } else if (char === "[") {
      counts.push(currentCount === 0 ? 1 : currentCount) // If currentCount is 0, that means no number was provided, so default to 1
      stackResult.push(currentString)
      // reset currentCount and currentString
      currentCount = 0
      currentString = ""
    } else if (char === "]") {
      // pop the last count and string from the stack to repeat and append
      const repeatedCnt = counts.pop()
      const lastString = stackResult.pop()
      currentString = lastString + currentString.repeat(repeatedCnt)
    } else {
      currentString += char
    }
    console.log({ currentCount, currentString, counts, stackResult }) // Debugging state
  }
  return currentString
}

// Example Usage
console.log(decodeRepeatedChar("2[a]3[b]")) // Output: "aabbb"
console.log(decodeRepeatedChar("3[a[2[b]]]")) // Output: "abbabbabb"
console.log(decodeRepeatedChar("2[3[c]d]")) // Output: "cccdcccd"
