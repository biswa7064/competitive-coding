class UrlNode {
	val
	prev
	next
	constructor(url) {
		this.val = url
		this.prev = null
		this.next = null
	}
}
class BrowserHistory {
	head
	constructor(homepage) {
		let node = new UrlNode(homepage)
		this.head = node
	}

	visit(url) {
		let newNode = new UrlNode(url)
		this.head.next = null
		newNode.prev = this.head
		this.head.next = newNode
		this.head = newNode
	}

	back(steps) {
		while (steps > 0 && this.head.prev !== null) {
			this.head = this.head.prev
			steps--
		}
		return this.head.val
	}

	forward(steps) {
		while (steps > 0 && this.head.next !== null) {
			this.head = this.head.next
			steps--
		}
		return this.head.val
	}
}

// Metrics
// Time Complexity: O(1) for visit, O(steps) for back and forward
// Space Complexity: O(n) where n is the number of unique URLs visited

// Example Usage:
let browserHistory = new BrowserHistory("leetcode.com")
browserHistory.visit("google.com") // You are in "leetcode.com". Visit "google.com"
browserHistory.visit("facebook.com") // You are in "google.com". Visit "facebook.com"
browserHistory.visit("youtube.com") // You are in "facebook.com". Visit "youtube.com"
console.log(browserHistory.back(1)) // You are in "youtube.com", move back to "facebook.com" return "facebook.com"
console.log(browserHistory.back(1)) // You are in "facebook.com", move back to "google.com" return "google.com"
console.log(browserHistory.forward(1)) // You are in "google.com", move forward to "facebook.com" return "facebook.com"
browserHistory.visit("linkedin.com") // You are in "facebook.com". Visit "linkedin.com"
console.log(browserHistory.forward(2)) // You are in "linkedin.com", you cannot move forward any steps.
console.log(browserHistory.back(2)) // You are in "linkedin.com", move back two steps to "facebook.com" then to "google.com". return "google.com"
console.log(browserHistory.back(7)) // You are in "google.com", you can move back only one step to "leetcode.com". return "leetcode.com"
