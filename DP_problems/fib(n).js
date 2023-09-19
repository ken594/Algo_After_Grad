// write a function fib(n) that takes in number as an argument.
// The function should return the n-th number of the Fibonacci sequence.

// Tabulation
// Time: O(n), Space: O(n)
const tabFib = (n) => {
    const table = Array(n + 1).fill(0);
    table[1] = 1;

    for (let i = 0; i <= n; i++) {
        table[i + 1] += table[i];
        table[i + 2] += table[i];
    }

    return table[n];
};

// memoization
//      js object, keys will be arg to fn, value will be the return value
// Time: O(2n), Space: O(n)
const memoFib = (n, memo = {}) => {
    // check if the key which is the arg is in the memo
    if (n in memo) return memo[n];

    if (n <= 2) return 1;
    memo[n] = memoFib(n - 1, memo) + memoFib(n - 2, memo);
    return memo[n];
};


// classic type of fib, recursively
// Time: O(2^n), Space: O(n) 
const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
};

// console.log(memoFib(6));  // 8
// console.log(memoFib(7));  // 13
// console.log(memoFib(8));  // 21
// console.log(memoFib(50));  // 12586269025

console.log(tabFib(6));  // 8
console.log(tabFib(7));  // 13
console.log(tabFib(8));  // 21
console.log(tabFib(50));  // 12586269025