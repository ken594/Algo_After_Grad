// Aug 16th
// 135. Candy (HARD)
/*
There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
Return the minimum number of candies you need to have to distribute the candies to the children.

*/

/**
 * @param {number[]} ratings
 * @return {number}
 */

// Two Pass
// O(n) || O(n)
var candy = function(ratings) {
    const n = ratings.length;
    const candy = Array(n).fill(1);
    // one pass start from the beginning and check if ratings[i + 1] > ratings[i]
    // if so then candy[i + 1] = candy[i] + 1
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) candy[i] = Math.max(candy[i - 1] + 1, candy[i]);
    }

    // second pass
    // do the same thing but start from the n - 1;
    let res = candy[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) candy[i] = Math.max(candy[i + 1] + 1, candy[i]);
        res += candy[i];
    }

    // return candy.reduce((val, currVal) => val + currVal, 0);
    return res
};