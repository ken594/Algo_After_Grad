// Aug 8th
// 169. Majority Element

/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.

Follow-up: Could you solve the problem in linear time and in O(1) space?

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

// One way to do so is to use an array or a hash map to count each elements
// Then return the most count element

// To achieve the follow-up which is O(1) space
// Sort the array and then return the middle one
var majorityElement = function(nums) {
    nums.sort();
    return nums[Math.floor(nums.length / 2)];
};

// What if we can't modify the original array
// Boyer-Moore Voting Algorithm
var majorityElement = function(nums) {
    let count = 0;
    let candidate = null;

    for (let num of nums) {
        if (count == 0) {
            candidate = num;
        }
        count += (num == candidate) ? 1 : -1;
    }

    return candidate;
};