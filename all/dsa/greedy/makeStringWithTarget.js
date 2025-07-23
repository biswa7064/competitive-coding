// Time Complexity: O(n)
// Space Complexity: O(n)
// Given an array of strings, group them into strings such that the total length of each group is less than or equal to the target length
function makeStringWithTarget(arr, target) {
  const result = []
  const len = arr.length
  let currentGroup = [],
    currentLength = 0
  for (let i = 0; i < len; i++) {
    const item = arr[i]
    const itemLength = item.length
    // if currentGroup is not empty then add a separator
    // otherwise make it 0
    const separatorLength = currentGroup.length > 0 ? 1 : 0
    // calculate the total length of the current group with the new item
    // and the separator
    const totalLength = currentLength + separatorLength + itemLength
    if (totalLength <= target) {
      currentGroup.push(item)
      currentLength = totalLength
    } else {
      if (currentGroup.length > 0) {
        result.push(currentGroup.join("-"))
      }
      currentGroup = [item]
      currentLength = itemLength
    }
  }

  //   don't forget to add the last group
  if (currentGroup.length > 0) {
    result.push(currentGroup.join("-"))
  }
  return result
}

// Example usage:
const arr = [
  "apple",
  "banana",
  "cherry",
  "oranges",
  "date",
  "fig",
  "grape",
  "kiwi",
]
const target = 12
console.log(makeStringWithTarget(arr, target))
// Output: [ 'apple-banana', 'cherry-date', 'fig-grape' ,'kiwi']
