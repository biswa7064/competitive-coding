export const interLeaveStrings = (str1, str2) => {
  if (!(str1 && str2)) {
    return str1 || str2
  }
  const result = []
  //   get the maximum length from both the strings
  const maxLength = Math.max(str1.length, str2.length)
  for (let i = 0; i < maxLength; i++) {
    // two "if" conditions will make sure that each character should push to the result irrespective of the size of both the strings.
    if (i < str1.length) {
      result.push(str1[i])
    }
    if (i < str2.length) {
      result.push(str2[i])
    }
  }
  return result.join("")
}

const test1 = {
  str1: "abcd",
  str2: "pqrs",
}
console.log(
  `After inter leave two strings for ${JSON.stringify(test1)} - `,
  interLeaveStrings(test1.str1, test1.str2)
)

// Alternate method-1
export const interLeaveStringsMethod1 = (str1, str2) => {
  if (!(str1 && str2)) {
    return str1 || str2
  }
  let result = ""
  //   get the maximum length from both the strings
  const maxLength = Math.max(str1.length, str2.length)
  for (let i = 0; i < maxLength; i++) {
    // two "if" conditions will make sure that each character should add to the result irrespective of the size of both the strings.
    if (i < str1.length) {
      result += str1[i]
    }
    if (i < str2.length) {
      result += str2[i]
    }
  }
  return result
}

console.log(
  `After inter leave two strings for ${JSON.stringify(test1)} - `,
  interLeaveStringsMethod1(test1.str1, test1.str2)
) // 'apbqcrds'
