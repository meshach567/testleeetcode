//Given a 32-bit signed integer, reverse the digits of the integer.

// Input: x = 123
// Output: 321

function reverse(x) {
    const sign = Math.sign(x);
    const reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''), 10) * sign;
    return (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1) ? 0 : reversed;
}

console.log(reverse(123)); // Output: 321