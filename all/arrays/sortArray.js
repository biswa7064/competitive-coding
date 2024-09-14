const sortArr = (numArr) => {
  if (numArr.length <= 1) {
    return numArr
  }
  const midLength = Math.floor(numArr.length / 2)
  let pivot = numArr[midLength]
  const { left, right } = numArr.reduce(
    (acc, curr, ind) => {
      if (ind === midLength) return acc
      if (pivot > curr) {
        acc.left.push(curr)
      } else {
        acc.right.push(curr)
      }
      return acc
    },
    { left: [], right: [] }
  )
  return [...sortArr(left), pivot, ...sortArr(right)]
}

const testInput = {
  test1: [23, 11, 9, 5, 34, 36, 38, 22, 7],
}

console.log("Sorted array is - ", sortArr(testInput.test1))
