// Aug 10th
// 55. Jump Game
// Array || DP || Greedy

/*
You are given an integer array nums.
You are initially positioned at the array's first index,
and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */


var canJump = function(nums) {
    // memo table to keep track of 1/0/-1 value for each index
    // 1/0/-1 stands for good/bad/unknown
    // let memo = Array(nums.length).fill(-1);
    const memo = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        memo.push(-1);
    }
    // we set the last point to be reachable
    memo[nums.length - 1] = 1;
    // call the backtracking function
    return jump(nums, 0, memo);
};

// backtracking function
function jump(nums, start, memo) {
    // early check if this index is good/bad, then return true/false
    if (memo[start] != -1) {
        return memo[start] == 1 ? true : false;
    }

    let furthestJump = Math.min(start + nums[start], nums.length - 1);
    for (let nextPosition = start + 1; nextPosition <= furthestJump; nextPosition++) {
        if (jump(nums, nextPosition, memo)) {
            memo[start] = 1;
            return true;
        }
    }
    memo[start] = 0;
    return false;
}


// Backtracking solution
// Time: O(2^n) Space: O(n)
// TLE
var canJump = function(nums) {
    return jump(nums, 0);
};

function jump(nums, start) {
    let i = nums[start];
    if (i+start >= nums.length - 1) return true;

    while (i > 0) {
        if (nums[i+start] != 0) {
            let temp = jump(nums, start+i);
            if (temp) return temp;
        }
        i--;
    }
    return false;
}