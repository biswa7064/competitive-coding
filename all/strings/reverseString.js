const revWithSeparator = (str, separator) => {
  return str.split(separator).reverse().join(separator)
}
const reverseString = (str) => {
  const revString = revWithSeparator(str, "")
  console.log({ revString })
  return revWithSeparator(revString, " ")
}

// reverse one string word without BM[built in method]
const revStringWithoutBM = (str) => {
  let revStr = ""
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i]
  }
  //   alternate
  //   for (let i = 0; i < str.length; i++) {
  //     revStr = str[i] + revStr
  //   }

  return revStr
}

// reverse string irrespective of position of words without BM
const reverseSentenceWithoutBM = (str) => {
  let chars = [],
    reversed = ""

  for (let i = 0; i < str.length; i++) {
    chars[i] = str[i]
  }
  let left = 0,
    right = chars.length - 1
  while (left <= right) {
    let temp = chars[left]
    chars[left] = chars[right]
    chars[right] = temp
    left++
    right--
  }
  for (const item of chars) {
    reversed += item
  }
  return reversed
}

// reverse string but not the position of words without BM
const reverseSentenceNoWordPositionWithoutBM = (sentence) => {
  let reversed = ""
  let word = ""

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      word = sentence[i] + word // Prepend the character to reverse the word
    } else {
      reversed += word + " " // Add the reversed word and a space to the result
      word = "" // Reset word for the next word
    }
    console.log({ sentence, word, reversed })
  }

  // Add the last word
  reversed += word

  return reversed
}

const test1 = "Welcome to the coding world!!"
const test2 = "Welcome"
console.log("test1 result - ", reverseString(test1))
console.log("test2 result - ", revStringWithoutBM(test2))
console.log("test3 result - [reverse string]", reverseSentenceWithoutBM(test1))
console.log(
  "test4 result - [reverse string without changing position of words]",
  reverseSentenceNoWordPositionWithoutBM(test1)
)
