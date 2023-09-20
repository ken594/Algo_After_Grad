/*

Write a function bestSum(targetSum, numbers) that takes in a targetSum and an array of numbers as arguments.

The functioin should return an array containing the shortest combination of numebrs that add up to exactly the targetSum.

If there is a tie for the shortest combination, you may return any one of the shortest.

*/

// *** Tabulation ***

// m = target sum
// n = numbers.length
// Time: O(n*m * m), Space: O(m * m)

const bestSum = (targetSum, numebers) => {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for (let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for (let num of numebers) {
                const combination = [ ...table[i], num];
                // if this combination is shorter than what is already stored
                if (!table[i + num] || table[i + num].length > combination.length) table[i + num] = combination;
            }
        }
    }

    return table[targetSum];
};

// *** memoization ***

// m = target sum
// n = numbers.length
// Time: O(n*m * m), Space: O(m * m)

// const bestSum = (targetSum, numbers, memo = {}) => {
//     // base case
//     if (targetSum in memo) return memo[targetSum];
//     if (targetSum === 0) return [];
//     if (targetSum < 0) return null;

//     let shortestCombination = null;

//     for (let num of numbers) {
//         const remainder = targetSum - num;
//         const remainderCombination = bestSum(remainder, numbers, memo);

//         if (remainderCombination !== null) {
//             const combination = [ ...remainderCombination, num ];
//             // if the combination is shorter than the current shortest, update it
//             if (shortestCombination === null || combination.length < shortestCombination.length) {
//                 shortestCombination = combination;
//             }
//         }
//     }

//     memo[targetSum] = shortestCombination;
//     return shortestCombination;
// };

// *** brute force recursion ***

// m = target sum
// n = numbers.length
// Time: O(n^m * m), Space: O(m * m)

// const bestSum = (targetSum, numbers) => {
//     // base case
//     if (targetSum === 0) return [];
//     if (targetSum < 0) return null;

//     let shortestCombination = null;

//     for (let num of numbers) {
//         const remainder = targetSum - num;
//         const remainderCombination = bestSum(remainder, numbers);

//         if (remainderCombination !== null) {
//             const combination = [ ...remainderCombination, num ];
//             // if the combination is shorter than the current shortest, update it
//             if (shortestCombination === null || combination.length < shortestCombination.length) {
//                 shortestCombination = combination;
//             }
//         }
//     }

//     return shortestCombination;
// };

console.log(bestSum(7, [5, 3, 4, 7])); // [7]
console.log(bestSum(8, [2, 3, 5])); // [3, 5]
console.log(bestSum(8, [1, 4, 5])); // [4, 4]
console.log(bestSum(100, [1, 2, 5, 25])); // [25, 25, 25, 25]