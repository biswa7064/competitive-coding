// Time Complexity: O(n) as we traverse the string once.
// Space Complexity: O(n) as we use a stack to keep track of opening brackets
const brackets = {
  "(": ")",
  "{": "}",
  "[": "]",
}
function validParenthesis(s) {
  const bracketStack = []
  for (let i = 0; i < s.length; i++) {
    if (["(", "{", "["].includes(s[i])) {
      bracketStack.push(s[i])
    } else {
      // if no open bracket is found then return false and the stack should be empty
      if (bracketStack.length === 0) return false
      // check if the closing bracket matches the last opened bracket
      // if no matches found then return false
      const lastStackItem = bracketStack.pop()
      if (s[i] !== brackets[lastStackItem]) return false
    }
  }
  // if there are any unmatched opening brackets left in the stack then return false else true
  return bracketStack.length === 0
}

// Example Usage
console.log(validParenthesis("()")) // true
console.log(validParenthesis("({[]})")) // true
console.log(validParenthesis("({[}])")) // false
console.log(validParenthesis("[")) // false
