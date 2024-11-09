function alternateEvenOdd(str, startWithOdd) {
  const numArr = str.replace(/\D/g, "").split("")
  const odds = numArr.filter((n) => Number(n) % 2 !== 0)
  const even = numArr.filter((n) => Number(n) % 2 === 0)
  let oddInd = 0,
    evenInd = 0
  const result = []
  let isStartWithOdd = startWithOdd === "yes"
  while (oddInd < odds.length || evenInd < even.length) {
    if (isStartWithOdd && oddInd < odds.length) {
      result.push(odds[oddInd])
      oddInd++
    } else if (!isStartWithOdd && evenInd < even.length) {
      result.push(even[evenInd])
      evenInd++
    }
    isStartWithOdd = !isStartWithOdd
  }
  console.log({ result })
  return result
}

/*
 * INPUT: 'AB23CD76@#91JK45'
 * OUTPUT: isStartWithOdd ?  ['3', '2', '7','6', '9', '4','1', '5'] : ['2', '3', '6','7', '4', '9','1', '5']
  ]
 */
const test1 = "AB23CD76@#91JK45"
alternateEvenOdd(test1, "yes")
