function myPow(x, n) {
	if (n === 0) return 1
	if (n < 0) return 1 / myPow(x, -n)
	// get the half of the power to reduce the number of multiplications
	let half = myPow(x, Math.floor(n / 2))
	if (n % 2 === 0) {
		return half * half
	}
	return half * half * x
}
