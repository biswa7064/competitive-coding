// array of objects of people list
// group them based on their age
const groupByAge = (arr) => {
  return arr.reduce((acc, curr) => {
    // create empty array based on each age
    if (!acc[curr.age]) {
      acc[curr.age] = []
    }
    // once the second item for the same age comes then it will push the current object
    acc[curr.age].push(curr)
    // return the updated accumulator
    return acc
  }, {})
}

const people = [
  { name: "Alice", age: 21 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 21 },
  { name: "David", age: 25 },
  { name: "Eve", age: 22 },
]

console.log(groupByAge(people))
