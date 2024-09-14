export function reverseNumber(num) {
  let reversed = 0
  const sign = num < 0 ? -1 : 1
  while (num > 0) {
    reversed = reversed * 10 + (num % 10)
    num = Math.floor(num / 10)
  }
  return reversed * sign
}

const test1 = 238976
console.log(`Reversed number of ${test1}`, reverseNumber(test1))
