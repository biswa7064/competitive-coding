const pow = (num, i) => {
	if (i === 0) return 1
	return num * pow(num, i - 1)
}
function getDigit(num, i) {
	// using this function may be helpful. good luck!
	return Math.floor((Math.abs(num) / pow(10, i)) % 10)
}

function digitCount(num) {
	// using this function may be helpful. good luck!
	return Math.abs(num).toString().length
}

function mostDigits(numArr) {
	// good luck!
	if (numArr.length === 0) return 0
	let maxCount = digitCount(numArr[0])
	numArr.forEach((num) => {
		if (digitCount(num) > maxCount) {
			maxCount = digitCount(num)
		}
	})
	return maxCount
}

/*
TIme complexity: O(n * k) where n is the number of elements in the input array and k is the number of digits in the largest number.
Space complexity: O(n + k) where n is the number of elements in the input array and k is the number of digits in the largest number (for the buckets).
*/

function radixSort(numArr) {
	let maxDigitCount = mostDigits(numArr)
	// good luck!
	for (let k = 0; k < maxDigitCount; k++) {
		// Create 10 buckets for digits 0-9
		const digitBuckets = Array.from({ length: 10 }, () => [])

		// Place each number into the appropriate bucket based on the digit at position k
		for (let i = 0; i < numArr.length; i++) {
			const digit = getDigit(numArr[i], k)
			digitBuckets[digit].push(numArr[i])
		}
		// concat the buckets back into numArr
		numArr = [].concat(...digitBuckets)
	}

	return numArr
}

// Example usage:
const testArr = [23, 345, 5467, 12, 2345, 9852]
console.log(radixSort(testArr)) // [12, 23, 345, 2345, 5467, 9852]

const testArr2 = [23, 345, 5467, 12, 2345, 9852, 1, 0, 123456789]
console.log(radixSort(testArr2)) // [0, 1, 12, 23, 345, 2345, 5467, 9852, 123456789]
