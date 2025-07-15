// Effective if the input array is sorted
// Time Complexity: O(n^2)
function triplet(numArr, target) {
  const result = []
  for (let i = 0; i < numArr.length - 2; i++) {
    let left = i + 1,
      right = numArr.length - 1
    while (left < right) {
      const sum = numArr[i] + numArr[left] + numArr[right]
      if (sum === target) {
        result.push([numArr[i], numArr[left], numArr[right]])
        left++
        right--
      } else if (sum < target) {
        left++
      } else {
        right--
      }
    }
  }
  return result
}

//  Example:1
const arr1 = [1, 2, 3, 4, 5, 6]
const target1 = 10
console.log(`Triplets that add up to ${target1}:`, triplet(arr1, target1)) // Output: [[1, 3, 6], [1,4,5], [2,3,5]]

//  Example:2
const arr2 = [1, 4, 6, 8, 10, 45]
const target2 = 22
console.log(`Triplets that add up to ${target2}:`, triplet(arr2, target2)) // Output: [[4,8,10]]
