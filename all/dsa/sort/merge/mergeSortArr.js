function merge(arr1, arr2) {
	let result = [],
		i = 0,
		j = 0
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] <= arr2[j]) {
			result.push(arr1[i])
			i++
		} else {
			result.push(arr2[j])
			j++
		}
	}
	while (i < arr1.length) {
		result.push(arr1[i])
		i++
	}

	while (j < arr2.length) {
		result.push(arr2[j])
		j++
	}
	return result
}

function mergeSort(arr) {
	if (arr.length <= 1) return arr
	const mid = Math.floor(arr.length / 2)
	let leftArr = mergeSort(arr.slice(0, mid))
	let rightArr = mergeSort(arr.slice(mid))
	return merge(leftArr, rightArr)
}

// Example
console.log(mergeSort([38, 27, 43, 3, 9, 82, 10])) // [3,9,10,27,38,43,82]
console.log(mergeSort([5, 2, 9, 1, 5, 6])) // [1,2,5,5,6,9]
console.log(mergeSort([2])) // [2]
console.log(mergeSort([])) // []
