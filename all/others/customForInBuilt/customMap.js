const customMap = (arr, mapFn) => {
  const mappedArr = []
  for (let i in arr) {
    const result = mapFn(arr[i], i, arr)
    mappedArr.push(result)
  }
  return mappedArr
}

const test1 = [1, 2, 3, 4]
const mapFn = (item) => item * 2
// Inbuilt method
console.log(`Using inbuilt method the result is `, test1.map(mapFn)) // [2,4,6,8]
// custom map method -
console.log(`Using custom map method the result is `, customMap(test1, mapFn)) // [2,4,6,8]
