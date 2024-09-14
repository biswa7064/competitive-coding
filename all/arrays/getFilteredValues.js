const getFilteredValuesBasedOnTarget = (arrObj, targetObj) => {
  const resultArr = []
  for (const item of arrObj) {
    if (Object.keys(targetObj).every((i) => targetObj[i] === item[i])) {
      resultArr.push(item)
    }
  }
  return resultArr
}

const testInput = {
  test1: [
    { name: "biswa", age: 27, city: "BBSR" },
    { name: "pragyan", age: 25, city: "BBSR" },
    { name: "testName", age: 27, city: "MKG" },
    { name: "testName2", age: 27, city: "BBSR" },
  ],
}

console.log(
  "Filtered result based on target",
  getFilteredValuesBasedOnTarget(testInput.test1, { city: "BBSR", age: 27 })
)
