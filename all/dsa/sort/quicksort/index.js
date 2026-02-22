const swap = (arr, i, j) => {
	let temp = arr[i]
	arr[i] = arr[j]
	arr[j] = temp
}

const getPivotIndex = (arr, start, end) => {
	let pivot = arr[start]
	let swapIndex = start
	for (let i = start + 1; i <= end; i++) {
		if (arr[i] < pivot) {
			swapIndex++
			swap(arr, swapIndex, i)
		}
	}
	swap(arr, start, swapIndex)
	return swapIndex
}

function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		let pivotIndex = getPivotIndex(arr, left, right)
		quickSort(arr, left, pivotIndex - 1)
		quickSort(arr, pivotIndex + 1, right)
	}
	return arr
}

// Example
console.log(quickSort([4, 6, 9, 1, 2, 5])) // [1, 2, 4, 5, 6, 9]
console.log(quickSort([])) // []
