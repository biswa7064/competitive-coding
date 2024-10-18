const countAndSay = (num) => {
  if (num === 1) return "1"
  const prev = countAndSay(num - 1)
  console.log({ prev })
  let current = "",
    count = 1

  for (let j = 1; j <= prev.length; j++) {
    if (prev[j] === prev[j - 1]) {
      count++ // Increase the count if the digit is the same
    } else {
      // Add the count and the digit to the current string
      current += count + prev[j - 1]
      count = 1 // Reset the count for the next group of digits
    }
  }
  return current
}

console.log(countAndSay(1)) // Output: "1"
console.log(countAndSay(5)) // Output: "1211"
