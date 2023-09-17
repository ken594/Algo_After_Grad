/*
1. Question 1
There are n types of items in a shop's inventory, where the quantity of the ith item is denoted by quantity[i].
These items are to be shipped in two consignments, where the first consignment contains items of type [1, 2, .., j],
and the second consignment contains the remaining item types, where j can be chosen such that 1 ≤ j < n.
Note that both consignments must be non-empty, and all items of a type must be in the same consignment.

The shopkeeper wants the item counts in each consignment to be equal.
To achieve this, the shopkeeper can perform the following move any number of times: increase or decrease the quantity of any item type by 1.
The quantity of each item type must remain positive throughout.

Find the minimum number of moves in which the total quantities of both consignments can be made equal if the item types are split optimally.

Example:
Consider n = 3, quantity = [1, 4, 4].
Considering 1-based indexing, increase quantity[3] by 1, so quantity' = [1, 4, 5].
Partition using j = 2 and consignments shipped are [1, 4] and [5]. This is optimal, so return the number of operations, 1.

Function Description
Complete the function getMinimumMoves in the editor below.
getMinimum Moves has the following parameter: int quantity[n]: the quantities of each item type

Returns:
long_int: the minimum moves required to make the sums equal in

*/

// Understanding of the problem:
// find the minimum number of moves to distribute the items into two consignments with equal sums.

/**
 * @param {number[]} quantity
 * @return {number}
 */

// solution from chatgpt
function findMin(quantity, i, sumCalculated, sumTotal) {
    if (i == 0) 
        return Math.abs((sumTotal - sumCalculated) - sumCalculated);

    return Math.min(findMin(quantity, i - 1, sumCalculated + quantity[i - 1], sumTotal), findMin(quantity, i - 1, sumCalculated, sumTotal));
}

var getMinimumMoves = function(quantity, n) {
    const totalQuantity = quantity.reduce((acc, val) => acc + val, 0);

    return findMin(quantity, n, 0, totalQuantity);
}

// const quantity = [1, 4, 4];
// const quantity = [5, 7];
const quantity = [1, 2, 3, 4, 5];
const result = getMinimumMoves(quantity, 5);
console.log(result);