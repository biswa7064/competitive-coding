export function debounce(fn, delay) {
  let timeout
  return function (...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn.apply(this, args), delay)
  }
}

// you will see the console after 10000ms
debounce((query) => {
  console.log(`Search for ${query}`)
}, 10000)("QueryToSearch")
