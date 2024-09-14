// METHOD:1 - Normal for-of loop to remove duplicate character from string
const removeDuplicateFromStr = (str) => {
  let strRes = "",
    seen = {}
  for (const char of str) {
    if (seen[char.toUpperCase()]) {
      continue
    } else {
      seen[char.toUpperCase()] = true
      strRes += char
    }
  }
  return strRes
}

// METHOD:2 - convert to array and then remove duplicate character from string

const removeDuplicateFromStrM1 = (str) => {
  const result = str.split("").reduce(
    (acc, curr) => {
      if (acc.seen[curr.toUpperCase()]) {
        return acc
      } else {
        acc.seen[curr.toUpperCase()] = true
        acc.resStr += curr
      }
      return acc
    },
    { seen: {}, resStr: "" }
  )
  return result.resStr
}

const test1 = "WordToTest"
console.log(`Result for string ${test1}:`, removeDuplicateFromStr(test1))
console.log(
  `Result for string ${test1} using Array Method:`,
  removeDuplicateFromStrM1(test1)
)
