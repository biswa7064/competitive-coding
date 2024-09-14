const longestCommonPrefix = (strArr) => {
  if (strArr.length === 0) return ""

  let commonPrefix = ""

  for (let i = 0; i < strArr[0].length; i++) {
    const char = strArr[0][i]
    for (let j = 1; j < strArr.length; j++) {
      // check if other strings having mismatch in length and character in same position then return common prefix
      if (strArr[j].length <= i || strArr[j][i] !== char) {
        console.log({ commonPrefix })
        return commonPrefix
      }
    }
    commonPrefix += char
  }
  console.log({ commonPrefix })
  return commonPrefix
}

const test1 = ["flower", "flow", "flight"]
console.log(
  `Longest common prefix for ${JSON.stringify(test1)} - `,
  JSON.stringify(longestCommonPrefix(test1))
)
