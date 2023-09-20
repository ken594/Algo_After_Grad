/*

Write a function howSum(targetSum, numbers) that takes in a targetSum and an array of numbers as arguments.

The function should return an array containing any combination of elements that add up to exactly the targetSum.
If there is no combination that adds up to the targetSum, then return null.

If there are multiple combinations possibie, you may return any single one.

*/

// *** Tabulation ***

// m = target sum
// n = numbers.length
// Time: O(m*n * m), Space: O(m*m)
const howSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for (let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for (let num of numbers) {
                table[i + num] = [ ...table[i], num ];
            }
        }
    }

    return table[targetSum];
};


// *** memoization ***

// m = target sum
// n = numbers.length
// Time: O(m*n * m), Space: O(m*m)
// const howSum = (targetSum, numbers, memo = {}) => {
//     // base case
//     if (targetSum in memo) return memo[targetSum];
//     if (targetSum === 0) return [];
//     if (targetSum < 0) return null;

//     for (let num of numbers) {
//         const remainder = targetSum - num;
//         const remainderResult = howSum(remainder, numbers, memo);
//         if (remainderResult !== null) {
//             memo[targetSum] = [ ...remainderResult, num ];
//             return memo[targetSum];
//         }
//     }

//     memo[targetSum] = null;
//     return null;
// };


// *** brute force recursion ***

// m = target sum
// n = numbers.length
// Time: O(n^m * m), Space: O(m)
// const howSum = (targetSum, numbers) => {
//     // base case
//     if (targetSum === 0) return [];
//     if (targetSum < 0) return null;

//     for (let num of numbers) {
//         const remainder = targetSum - num;
//         const remainderResult = howSum(remainder, numbers);
//         if (remainderResult !== null) {
//             // remainderResult.push(num);
//             // return remainderResult;
//             return [ ...remainderResult, num ];
//         }
//     }

//     return null;
// };

console.log(howSum(7, [2, 3])); // [3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7])); // [4, 3]
console.log(howSum(7, [2, 4])); // null
console.log(howSum(8, [2, 3, 5])); // [2, 2, 2, 2]
console.log(howSum(300, [7, 14])); // null