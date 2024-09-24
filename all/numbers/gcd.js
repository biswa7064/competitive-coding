// recursion
function gcdByRecursion(n1, n2) {
  if (!n2) return n1
  return gcdByRecursion(n2, n1 % n2)
}

// using loop
function gcdByLoop(n1, n2) {
  while (n1 !== n2) {
    if (n1 > n2) {
      n1 -= n2
    } else {
      n2 -= n1
    }
  }
  return n2
}

// using for & if..else
function gcdByForAndIfElse(n1, n2) {
  let result = 0
  for (let i = 1; i <= Math.max(n1, n2); i++) {
    if (n1 % i === 0 && n2 % i === 0) {
      result = i
    }
  }
  return result
}

const test1 = { n1: 60, n2: 15 }
const test2 = { n1: 36, n2: 60 }

// recursion result
console.log(
  `GCD of ${test1.n1} & ${test1.n2} = `,
  gcdByRecursion(test1.n1, test1.n2)
)
console.log(
  `GCD of ${test2.n1} & ${test2.n2} = `,
  gcdByRecursion(test2.n1, test2.n2)
)

// while loop result
console.log(
  `GCD of ${test2.n1} & ${test2.n2} using loop = `,
  gcdByRecursion(test2.n1, test2.n2)
)

// for..if..else loop result
console.log(
  `GCD of ${test1.n1} & ${test1.n2} using for..if..else = `,
  gcdByRecursion(test1.n1, test1.n2)
)
