const flattenArray = (nestedArr) => {
  // declare with "let" as we are going to concat flatten array value for nested item
  let result = []
  for (const item of nestedArr) {
    // if any nested array found it will perform the recursion and then concat with main result
    if (Array.isArray(item)) {
      // concat with the result which contains all other values from array.
      result = result.concat(flattenArray(item))
    } else {
      // if direct item found then just push that item to the result array
      result.push(item)
    }
  }
  return result
}

// using reduce method
const flattenArrayUsingReduce = (nestedArr) => {
  return nestedArr.reduce((acc, curr) => {
    const flattenRes = Array.isArray(curr)
      ? flattenArrayUsingReduce(curr)
      : curr
    return acc.concat(flattenRes)
  }, [])
}

const testInput = {
  test1: [1, [2, 3, 4], 5, 6, [7, 8], [9, [10, 11]]],
}

console.log("Flatten array result is - ", flattenArray(testInput.test1))
console.log(
  "Flatten array result using `reduce` method is - ",
  flattenArrayUsingReduce(testInput.test1)
)
