/*

Write a function canConstruct(target, wordBank) that accepts a target string and an array of strings.

The function should return a boolean indicating whether or not the target can be constructed by concatenating elements of the wordBank array.

You may reuse elements of wordBank as many times as needed.

*/

// memoization
// m = target.length
// n = workBank.length
// Time: O(n*m * m), Space: O(m * m)
const canConstruct = (target, wordBank, memo={}) => {
    // base case
    if (target in memo) return memo[target];
    if (target === "") return true;

    for (let word of wordBank) {
        // only take prefix of the target
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if (canConstruct(suffix, wordBank, memo) === true) {
                memo[target] = true;
                return true;
            }
        }
    }

    memo[target] = false;
    return false;
};

// brute force recursion
// m = target.length
// n = workBank.length
// Time: O(n^m * m), Space: O(m * m)
// const canConstruct = (target, wordBank) => {
//     // base case
//     if (target === "") {
//         return true;
//     }

//     for (let word of wordBank) {
//         // only take prefix of the target
//         if (target.indexOf(word) === 0) {
//             const suffix = target.slice(word.length);
//             if (canConstruct(suffix, wordBank) === true) return true;
//         }
//     }

//     return false;
// };

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // false
console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // true
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"])); // false
