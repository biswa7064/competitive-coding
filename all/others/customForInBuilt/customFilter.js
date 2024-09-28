function customFilter(arr, filterFn) {
  const filteredRes = []
  for (let i in arr) {
    const result = filterFn(arr[i], i, arr)
    if (!result) {
      continue
    }
    filteredRes.push(arr[i])
  }
  return filteredRes
}

const test1 = [1, 2, 3, 4, 6, 8, 12]
const filterFn = (item) => item % 2 !== 0
// Inbuilt method
console.log(`Using inbuilt method the result is `, test1.filter(filterFn)) // [1,3]
// custom map method -
console.log(
  `Using custom map method the result is `,
  customFilter(test1, filterFn)
) // [1,3]
