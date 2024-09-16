export function rotateArray(arr, target) {
  // handle edge cases
  if (!(arr && arr.length) || target <= 0) {
    return arr
  }
  const arrLen = arr.length
  // Handle edge cases and negative rotations
  target %= arrLen //Ensure k is within the range [0, arr.length]
  if (target === 0) {
    return arr // No need of rotation
  }
  console.log({ target })
  reverse(arr, 0, arrLen - 1) // whole array
  reverse(arr, 0, target - 1) // starting to target point
  reverse(arr, target, arrLen - 1) // target to ending
  return arr
}

const reverse = (arr, start, end) => {
  while (start < end) {
    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp
    start++
    end--
  }
}

const test1 = { arr: [10, 12, 6, 2, 3, 9, 27, 32, 34, 36], target: 5 }

console.log(
  `After rotate array on point ${test1.target} - `,
  rotateArray(test1.arr, test1.target)
)
