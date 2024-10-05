// Pangram: the sentence/string should contain all 26 characters
const isPangram = (str) => {
  const set = new Set()
  const regex = /[a-z]/
  for (const char of str.toLowerCase()) {
    if (!regex.test(char)) continue
    set.add(char)
  }
  return set.size === 26 ? "Yes" : "No"
}

const test1 = "When zombies arrive, quickly fax Judge Pat"
const test2 = "The quick brown fox jumps over the lazy dog"
const test3 = "Hello, World!"
console.log(`is "${test1}" Pangram? `, isPangram(test1))
console.log(`is "${test2}" Pangram? `, isPangram(test2))
console.log(`is "${test3}" Pangram? `, isPangram(test3))
