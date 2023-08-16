//  Aug 15th
// 134. Gas Station

/*
There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station.
You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction,
otherwise return -1. If there exists a solution, it is guaranteed to be unique


*/

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

// Leetcode Solution
// One Pass
// O(n) || O(1)
var canCompleteCircuit = function(gas, cost) {
    let currGain = 0; totalGain = 0; ans = 0;
    for (let i = 0; i < gas.length; i++) {
        // gain[i] = gas[i] - cost[i]
        totalGain += gas[i] - cost[i];
        currGain += gas[i] - cost[i];

        // If we meet a "valley", start over from the next station
        // with 0 initial gas.
        if (currGain < 0) {
            ans = i + 1;
            currGain = 0;
        }
    }

    return totalGain >= 0 ? ans : -1;
};



var canCompleteCircuit = function(gas, cost) {
    // calculate the diff bwt gas and cost
    // In the mean time calculate the sum of diff
    const n = gas.length;
    const diff = Array(n);
    let maxDiff = Number.NEGATIVE_INFINITY;
    let maxDiffIndex = -1;
    let diffSum = 0;
    for (let i = 0; i < n; i++) {
        diff[i] = gas[i] - cost[i];
        diffSum += diff[i];
        if (diff[i] > maxDiff) {
            maxDiff = diff[i];
            maxDiffIndex = i;
        }
    }
    if (diffSum < 0) return -1;

    let ans = -1;
    for (let i = 0; i < n; i++) {
        if (diff[i] > 0) {
            let sum = 0;
            let index = i;
            let times = 0;
            while (times < n) {
                sum += diff[index];
                if (sum < 0) break;
                if (times === n - 1) ans = i;
                index = (index + 1) % n;
                times++;
            }
        }
    }
    return ans;
};

// Brute Force:
// Try out every combinations
// O(n^2) || O(1)
var canCompleteCircuit = function(gas, cost) {
    const n = gas.length;
    let ans = -1;
    for (let i = 0; i < n; i++) {
        let times = 0;
        let start = i;
        let gasAmount = 0;
        while (times < n && ans < 0) {
            gasAmount += gas[start];
            if (gasAmount < cost[start]) break;
            gasAmount -= cost[start];
            if (times === n - 1) ans = i;
            start = (start + 1) % n;
            times++;
        }
    }
    return ans;
};