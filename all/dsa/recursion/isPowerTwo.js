function isPowerTwo(n) {
	if (n <= 0) return false
	if (n === 1) return true
	if (n % 2 !== 0) return false
	return isPowerTwo(n / 2)
}

// use cases
const testDate = {
	t1: 1,
	t2: 2,
	t3: 16,
	t4: 3
}

console.log(isPowerTwo(testDate.t1)) // true
console.log(isPowerTwo(testDate.t2)) // true
console.log(isPowerTwo(testDate.t3)) // true
console.log(isPowerTwo(testDate.t4)) // false
