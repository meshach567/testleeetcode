//Input: n = 3
// Output: 3

function climbStairs(n) {
    if (n <= 2) return n;

    let first = 1, second = 2, current;

    for (let i = 3; i <= n; i++) {
        current = first + second;
        first = second;
        second = current;
    }

    return current;
}

console.log(climbStairs(3)); // Output: 3
// Explanation: The number of ways to climb to the nth step is the sum of the ways to climb to the (n-1)th and (n-2)th steps, which is a classic Fibonacci sequence problem.
// The function uses an iterative approach to calculate the number of distinct ways to climb to the nth step, where you can take either 1 or 2 steps at a time.
// The time complexity is O(n) and the space complexity is O(1) since we only use a few variables to keep track of the previous two results.
// This is more efficient than using recursion, which would have exponential time complexity due to repeated calculations