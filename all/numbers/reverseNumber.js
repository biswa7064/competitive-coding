// Method:1 - Reverse number without converting it to string
export function reverseNumber(num) {
  let reversed = 0
  const sign = num < 0 ? -1 : 1
  while (num > 0) {
    reversed = reversed * 10 + (num % 10)
    num = Math.floor(num / 10)
  }
  return reversed * sign
}

// Method:2 - Reverse number by converting it to string
export function reverseNumberConvertingString(num) {
  if (!num) return 0
  const numStr = num.toString()
  let reversed = ""
  let length = numStr.length - 1
  while (length >= 0) {
    reversed += numStr.charAt(length)
    length--
  }
  return Number(reversed)
}

const test1 = 238976
console.log(`Reversed number of ${test1}`, reverseNumber(test1))
console.log(
  `Reversed number of ${test1} using Method:2`,
  reverseNumberConvertingString(test1)
)
