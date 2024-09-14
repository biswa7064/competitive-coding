const maxFrequentChar = (str) => {
  if (!str) return null
  let charSeen = {}
  let maxCount = 0,
    maxChar = ""
  const strWithoutSpace = str.replace(/\s+/g, "")
  strWithoutSpace.split("").forEach((element) => {
    const caseElem = element.toLowerCase()
    charSeen[caseElem] = (charSeen[caseElem] || 0) + 1
    if (charSeen[caseElem] > maxCount) {
      maxCount = charSeen[caseElem]
      maxChar = element
    }
  })
  console.log({ maxChar, maxCount, charSeen })
  return maxChar
}

const test1 = "Pineapple is a good fruit"
console.log(
  `Max frequent character for string ${test1}`,
  maxFrequentChar(test1)
)
