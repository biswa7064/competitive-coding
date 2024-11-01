function multiply(num1, num2) {
  if (num1 === "0" || num2 === "0") return "0"
  const n1Len = num1.length
  const n2Len = num2.length
  const nums = Array(n1Len + n2Len).fill(0)
  for (let i = n1Len - 1; i >= 0; i--) {
    for (let j = n2Len - 1; j >= 0; j--) {
      const prod = +num1[i] * +num2[j]
      let pos1 = i + j,
        pos2 = i + j + 1
      const sum = prod + nums[pos2]
      nums[pos2] = sum % 10
      nums[pos1] += Math.floor(sum / 10)
    }
  }
  const numStr = nums.join("")
  return numStr[0] === "0" ? numStr.slice(1) : numStr
}

// Example 1:
// Input num1 = "2", num2 = "3"
// Output: "6"
console.log(multiply("2", "3"))
// Example 2:
// Input: num1 = "123", num2 = "456"
// Output: "56088"
console.log(multiply("123", "456"))
