// Aug 8th
// 189. Rotate Array

// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Follow up:

// Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Use Reverse
// We firstly reverse all the elements of the array
// Then, reversing the first k elements followed by reversing the rest n-k elements
var rotate = function(nums, k) {
    const n = nums.length;
    k %= n;
    reverse(nums, 0, n - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, n - 1);
};

// helper function
function reverse(nums, start, end) {
    while (start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}

// Using Cyclic Replacements
// O(n) | O(1)
var rotate = function(nums, k) {
    const n = nums.length;
    k = k % n;
    let count = 0;
    for (let start = 0; count < n; start++) {
        let current = start;
        let prev = nums[start];
        do {
            let next = (current + k) % nums.length;
            let temp = nums[next];
            nums[next] = prev;
            prev = temp;
            current = next;
            count++;
        } while (start != current);
    }
};

// Use an extra array
// the number at index i is placed in the index (i + k) % length of array
// Time: O(n) Space: O(n)
var rotate = function(nums, k) {
    let temp = [...nums];
    for (let i = 0; i < nums.length; i++) {
        temp[(i + k) % nums.length] = nums[i];
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = temp[i];
    }
};


// failed solution
// use Array.concat and Array.slice
var rotate = function(nums, k) {
    // let n be the length of the array
    // the rotated array = [n-k, n].concat([0, k+1]);
    let n = nums.length;
    k = k % n;
    if (k == 0 || k == n) return;
    let temp = nums.slice(n-k).concat(nums.slice(0, k+1));
    for (let i = 0; i < n; i++) {
        nums[i] = temp[i];
    }
};