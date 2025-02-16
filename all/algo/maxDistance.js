function maxDistance(numArr) {
  const map = {}
  let start = 0,
    end = numArr.length,
    max = 0
  while (start < end) {
    const curr = numArr[start]
    let sub = start
    if (map[curr]) {
      sub = start - map[curr]
    } else {
      map[curr] = start
    }
    if (sub > max) {
      max = sub
    }
    start++
  }
  return max
}
const numArr = [3, 2, 1, 2, 1, 4, 5, 8, 6, 7, 4, 2]
console.log("max distance - ", maxDistance(numArr))
