// Aug 11
// 274. H-Index

/*
Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper,
return the researcher's h-index.

According to the definition of h-index on Wikipedia:
The h-index is defined as the maximum value of h such that
the given researcher has published at least h papers that have each been cited at least h times.
*/

/**
 * @param {number[]} citations
 * @return {number}
 */
// Runtime: O(n) Space: O(n)
var hIndex = function(citations) {
    const n = citations.length;
    const papers = Array(n+1).fill(0);
    for (const c of citations) {
        papers[Math.min(n, c)]++;
    }
    let k = n;
    for (let s = papers[n]; k > s; s += papers[k])
        k--;
    return k;
};

// Sorting
var hIndex = function(citations) {
    citations.sort( (a, b) => b - a );
    let i = 0;
    while(citations[i] > i) {
        i++;
    }
    
    return i;
};

// Sorting
var hIndex = function(citations) {
    citations.sort((a,b) => b - a);
    for (i = 0; i < citations.length; i++) {
        if (citations[i] < i + 1) return i;
    }
    return i;
};

// Brute Force
// Time: O(n^2)
// start from the length of the citations,
// check if each element is greater than this value
// if not then decrement it and loop again
var hIndex = function(citations) {
    // let res = citations.length;
    // let count = citations.length;
    for (let res = citations.length; res > 0; res--) {
        let count = citations.length;
        if (isValid(citations, res, count)) {
            return res;
        }
    }
    return 0;
};

function isValid(citations, res, count) {
    for (let elem of citations) {
        if (elem < res) {
            count--;
        }
        if (count < res) return false;
    }
    return true;
}

// Failed solution
// Try to use the average to find the H-Index
var hIndex = function(citations) {
    let sum = 0;
    for (let elem of citations) {
        sum += elem;
    }
    if (sum == 0) return 0;
    let average = Math.max(Math.floor(sum / citations.length), 1);
    return Math.min(average, citations.length);
};