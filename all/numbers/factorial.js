const getFactorialNum = (num) => {
  if ([0, 1].includes(num)) return 1
  return num * getFactorialNum(num - 1)
}

const test1 = 5
const test2 = 1
const test3 = 0
console.log(`Factorial for number ${test1} - `, getFactorialNum(test1))
console.log(`Factorial for number ${test2} - `, getFactorialNum(test2))
console.log(`Factorial for number ${test3} - `, getFactorialNum(test3))
