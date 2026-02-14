function numberSort(arr) {
	if (arr.length < 2) return arr
	console.log(`start:${performance.now()}`)
	for (let i = 1; i < arr.length; i++) {
		let current = arr[i],
			j = i - 1
		while (j >= 0 && arr[j] > current) {
			arr[j + 1] = arr[j]
			j--
		}
		arr[j + 1] = current
	}
	console.log(`end:${performance.now()}`)
	return arr
}

// Example
console.log(numberSort([2, 9, 3, 4, 7, 23, 22, 1])) // [1,2,3,4,7,9,22,23]
console.log(numberSort([2, 9, 3, 4, 7])) // [2,3,4,7,9]
console.log(numberSort([2])) // [2]
console.log(numberSort([])) // []
