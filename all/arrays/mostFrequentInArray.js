const mostFrequentInArray = (arr) => {
  return arr.reduce(
    (acc, curr) => {
      if (!acc.frequency[curr]) {
        acc.frequency[curr] = 1
      } else {
        acc.frequency[curr]++
      }
      if (acc.frequency[curr] > acc.maxFrequency) {
        acc.maxFrequency = acc.frequency[curr]
        acc.mostFrequent = curr
      }
      return acc
    },
    {
      frequency: {},
      maxFrequency: 0,
      mostFrequent: arr[0],
    }
  )
}

const array = [1, 3, 2, 1, 3, 4, 1, 3, 3]
console.log(mostFrequentInArray(array)) // Output: 1 or 3
