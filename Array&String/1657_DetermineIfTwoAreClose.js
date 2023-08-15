// Aug 14
// 1657. Determine if Two Strings Are Close

/*
Two strings are considered close if you can attain one from the other using the following operations:

Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
// Using Frequency array map
var closeStrings = function(word1, word2) {
    const LETTERNUMBER = 26;
    if (word1.length != word2.length) return false;
    
    const word1Map = new Array(26).fill(0);
    const word2Map = new Array(26).fill(0);
    for (let i = 0; i < word1.length; i++) {
        word1Map[word1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    for (let i = 0; i < word2.length; i++) {
        word2Map[word2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    for (let i = 0; i < LETTERNUMBER; i++) {
        if ((word1Map[i] === 0 && word2Map[i] !== 0) ||
        (word2Map[i] === 0 && word1Map[i] !== 0)) {
            return false;
        }
    }

    word1Map.sort((a,b) => b - a);
    word2Map.sort((a,b) => b - a);
    // return word1Map === word2Map;
    for (let i = 0; i < 26; i++) {
        if (word1Map[i] !== word2Map[i]) return false;
        if (word1Map[i] === 0) break;
    }

    return true;
};


// Using hash map
// O(n) || O(1)
var closeStrings = function(word1, word2) {
    if (word1.length != word2.length) return false;

    let wordCount1 = new Map();
    let wordCount2 = new Map();

    counting(word1, wordCount1);
    counting(word2, wordCount2);

    if (wordCount1.size != wordCount2.size) return false;
    
    for (let key of wordCount1.keys()) {
        if (!wordCount2.has(key)) return false;
    }
    
    const array1 = [];
    const array2 = [];
    for (let value of wordCount1.values()) {
        array1.push(value);
    }
    
    for (let value of wordCount2.values()) {
        array2.push(value);
    }
    
    array1.sort();
    array2.sort();
    
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] != array2[i]) return false;
    }

    return true;
};

function counting(word, wordCount) {
    for (let i = 0; i < word.length; i++) {
        if (!wordCount.has(word[i])) {
            wordCount.set(word[i], 1);
        } else {
            wordCount.set(word[i], wordCount.get(word[i]) + 1);
        }
    }
}