const isPalindromeStr = (str) => {
  let start = 0,
    end = str.length - 1
  while (start < end) {
    if (str[start] !== str[end]) {
      return false
    }
    start++
    end--
  }
  return true
}

const longestPalindromeSubStr = (str) => {
  const sbStrArr = []
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length - 1; j++) {
      const subStr = str.substring(i, j)
      if (isPalindromeStr(subStr) && subStr.length > 1) {
        sbStrArr.push(subStr)
      }
    }
  }
  let maxLength = 0
  for (const s of sbStrArr) {
    if (s.length > maxLength) {
      maxLength = s.length
    }
  }
  console.log({ sbStrArr, maxLength })
  return sbStrArr.find((st) => st.length === maxLength)
}

console.log(longestPalindromeSubStr("abbaeae"))
