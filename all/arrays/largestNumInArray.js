const getLargestNumInArr = (arr) => {
  if (!(arr && arr.length)) {
    return 0
  }
  let largest = arr[0]
  let count = 0
  while (count < arr.length - 1) {
    if (largest < arr[count]) {
      largest = arr[count]
    }
    count++
  }
  return largest
}

console.log(getLargestNumInArr([9, 70, 120, 8, 37, 23]))
