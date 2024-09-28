function customReduce(reducerFn, initialVal = undefined, arr) {
  let modifiedVal = initialVal
  for (let i in arr) {
    modifiedVal = reducerFn(modifiedVal, arr[i], i, arr)
  }
  return modifiedVal
}

// sum of digits in an array using reduce/custom reduce method
const test1 = [1, 2, 3, 4, 6, 8, 12]
const sumAllNumbers = (initialVal, curr) => initialVal + curr
// Inbuilt method
console.log(`Using inbuilt method the result is `, test1.reduce(sumAllNumbers)) // [1,3]
// custom map method -
console.log(
  `Using custom map method the result is `,
  customReduce(sumAllNumbers, 0, test1)
) // [1,3]
