//Given a string containing just the characters ‘(‘, ‘)’, ‘{‘, ‘}’, ‘[‘ and ‘]’, determine if the input string is valid.

//Input: s = "()[]{}"
// Output: true

function isVaid(s) {
    const stack = [];

    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if ( char in map) {
            if (stack.pop()  !== map[char]) return false;
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}


//Explanation:
//We use a stack to track opening brackets. For each closing bracket, we check if it matches the top of the stack.