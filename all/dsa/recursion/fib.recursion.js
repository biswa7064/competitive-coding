const fib = (n) => {
	if (n === 0) return 0
	if (n < 3) return 1
	return fib(n - 1) + fib(n - 2)
}

// example
console.log(fib(0)) // 0
console.log(fib(1)) // 1
console.log(fib(2)) // 1
console.log(fib(3)) // 2
