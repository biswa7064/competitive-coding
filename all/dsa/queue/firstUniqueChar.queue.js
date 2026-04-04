function firstUniqChar(s) {
	let freq = {}
	let q = []
	for (let i = 0; i < s.length; i++) {
		if (!freq[s[i]]) {
			freq[s[i]] = 1
			q.push([s[i], i])
		} else {
			freq[s[i]] += 1
		}
	}

	while (q.length !== 0) {
		let [curr, ind] = q[0]
		if (freq[curr] === 1) {
			return ind
		}
		q.shift()
	}
	return -1
}

// Metrics:
// Time Complexity: O(n)
// Space Complexity: O(n)

// Test Cases:
console.log(firstUniqChar("leetcode")) // 0
console.log(firstUniqChar("loveleetcode")) // 2
console.log(firstUniqChar("aabb")) // -1
