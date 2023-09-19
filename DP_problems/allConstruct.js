/*

Write a function allConstruct(target, wordBank) that accepts a target string and an array of strings.

The function should return a 2D array containing all of the ways that the target can be constructed by concatenating elements of the wordBank array.
Each element of the 2D array should represent one combination that constructs the target.

You may reuse elements of wordBank as many times as needed.

*/
// memoization
// m = target.length
// n = wordBank.length
// Time: O(n^m), Space: O(m)
const allConstruct = (target, wordBank, memo={}) => {
    // base case
    if (target in memo) return memo[target];
    if (target === "") return [[]];

    const result = [];

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank, memo);
            // iterate each element in the suffixWays and add the word in front of it
            const targetWays = suffixWays.map(way => [ word, ...way ]);
            result.push(...targetWays);
        }
    }

    memo[target] = result;
    return result;
};

// brute force recursion
// m = target.length
// n = wordBank.length
// Time: O(n^m), Space: O(m)
// const allConstruct = (target, wordBank) => {
//     // base case
//     if (target === "") return [[]];

//     const result = [];

//     for (let word of wordBank) {
//         if (target.indexOf(word) === 0) {
//             const suffix = target.slice(word.length);
//             const suffixWays = allConstruct(suffix, wordBank);
//             // iterate each element in the suffixWays and add the word in front of it
//             const targetWays = suffixWays.map(way => [ word, ...way ]);
//             result.push(...targetWays);
//         }
//     }

//     return result;
// };

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
// [
//     [ 'purp', 'le']
//     [ 'p', 'ur', 'p', 'le']
// ]
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]));
// [
//     ['ab', 'cd', 'ef'],
//     ['ab', 'c', 'def'],
//     ['abc', 'def'],
//     ['abcd', 'ef']
// ]
console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // []
console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeez", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"])); // []