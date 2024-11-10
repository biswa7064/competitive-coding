function fourSum(nums, target) {
  nums.sort((a, b) => a - b) // Step 1: Sort the array
  const result = []
  const n = nums.length
  for (let i = 0; i < n - 3; i++) {
    // Avoid duplicates for the first number
    if (i > 0 && nums[i] === nums[i - 1]) continue

    for (let j = i + 1; j < n - 2; j++) {
      // Avoid duplicates for the second number
      if (j > i + 1 && nums[j] === nums[j - 1]) continue

      // Two-pointer technique
      let left = j + 1 // 3rd number
      let right = n - 1 // fourth number

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right]
        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]])

          // Move left and right pointers to the next different numbers to avoid duplicates
          while (left < right && nums[left] === nums[left + 1]) left++
          while (left < right && nums[right] === nums[right - 1]) right--

          // Move to the next unique elements
          left++
          right--
          continue
        }
        if (sum < target) {
          left++
          continue
        }
        right--
      }
    }
  }
  console.log({ result })
  return result
}

const nums = [1, 0, -1, 0, -2, 2]
const target = 0
fourSum(nums, target) // Output: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]
